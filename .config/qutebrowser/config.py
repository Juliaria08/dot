import re
import os
import sys
import traceback
from qutebrowser.api import cmdutils, message


# Prevent flake8 errors
c = c  # noqa: F821 pylint: disable=E0602,C0103
config = config  # noqa: F821 pylint: disable=E0602,C0103


@cmdutils.register()
@cmdutils.argument("key")
@cmdutils.argument("action")
def map(key: str, action: str):
    """Bind keys in all motion modes"""
    if (action[0] == ":"):
        config.bind(key, action[1:])
        config.bind(key, action[1:], mode="caret")
    else:
        config.bind(key, "fake-key -g " + action)
        config.bind(key, "fake-key -g " + action, mode="caret")


@cmdutils.register()
@cmdutils.argument("key")
@cmdutils.argument("action")
def cmap(key: str, action: str):
    """Bind keys in command mode"""
    if (action[0] == ":"):
        config.bind(key, action[1:], mode="command")
    else:
        config.bind(key, "set-cmd-text -i " + action, mode="command")


@cmdutils.register()
@cmdutils.argument("key")
@cmdutils.argument("action")
def imap(key: str, action: str):
    """Bind keys in insert mode"""
    if (action[0] == ":"):
        config.bind(key, action[1:], mode="insert")
    else:
        config.bind(key, "fake-key " + action, mode="insert")


@cmdutils.register()
@cmdutils.argument("key")
@cmdutils.argument("action")
def pmap(key: str, action: str):
    """Bind keys in passthrough mode"""
    if (action[0] == ":"):
        config.bind(key, action[1:], mode="passthrough")
    else:
        config.bind(key, "fake-key " + action, mode="passthrough")


@cmdutils.register()
@cmdutils.argument("key")
@cmdutils.argument("action")
def nmap(key: str, action: str):
    """Bind keys in normal mode"""
    if (action[0] == ":"):
        config.bind(key, action[1:])
    else:
        config.bind(key, "fake-key -g " + action)


@cmdutils.register()
@cmdutils.argument("key")
def nunmap(key: str):
    """Unbind keys in normal mode - nunmap can also be used outside of a\
 monastery"""
    config.unbind(key)


@cmdutils.register()
@cmdutils.argument("key")
@cmdutils.argument("action")
def vmap(key: str, action: str):
    """Bind keys in caret mode"""
    if (action[0] == ":"):
        config.bind(key, action[1:], mode="caret")
    else:
        config.bind(key, "fake-key -g " + action, mode="caret")


@cmdutils.register()
@cmdutils.argument("mappings")
def langmap(mappings: str):
    """Map the keys of one layout to the commands of the default layout"""
    mappings =mappings.split(",")
    newMappings = []
    for i in range(len(mappings)):
        if len(mappings[i]) == 2:
            newMappings.append(mappings[i])
    mappings = newMappings
    del newMappings
    newMappings = {}
    for i in range(len(mappings)):
        newMappings[mappings[i][1]] = str(mappings[i][0])
    mappings = dict(newMappings)
    del newMappings
    oldBindings = dict(c.bindings.default)
    for mode in c.bindings.commands:
        for key in c.bindings.commands[mode]:
            oldBindings[mode][key] = c.bindings.commands[mode][key]
    newBindings = {"normal": {}, "insert": {}, "hint": {}, "passthrough": {}, "command": {}, "prompt": {}, "yesno": {}, "caret": {}, "register": {}}
    for mode in ["normal", "insert", "hint", "passthrough", "command", "prompt", "yesno", "caret", "register"]:
        for key in oldBindings[mode]:
            if key[0] != "<":
                replacementExp = str(key)
                replacementExp = replacementExp.translate(str.maketrans(mappings))
                newBindings[mode][replacementExp] = oldBindings[mode][key]
            else:
                newBindings[mode][key] = oldBindings[mode][key]
    c.bindings.commands = dict(newBindings)
    for mode in ["normal", "insert", "hint", "passthrough", "command", "prompt", "yesno", "caret", "register"]:
        c.bindings.commands[mode] = {}
        for key in newBindings[mode]:
            c.bindings.commands[mode][key] = str(newBindings[mode][key])
    c.hints.chars = c.hints.chars.translate(str.maketrans(mappings))
    del newBindings
    del oldBindings


def load_theme():
    def theme_tabs():
        # Tabs maximum width
        c.tabs.max_width = 200

        # Shrink pinned tabs
        c.tabs.pinned.shrink = True

        # Tab width
        c.tabs.width = "4%"

        # Tab indicator width
        c.tabs.indicator.width = 2

    # Tab configuration
    theme_tabs()

    # Load Gruvbox theme
    config.source("gruvbox.py")

    # Set default font
    c.fonts.default_family = "DejaVu"

    # Hint font
    c.fonts.hints = "bold default_size default_family"

    # Load user stylesheet
    c.content.user_stylesheets = ["style.css"]

    # Audio/mute indicator in tab bar
    from qutebrowser.mainwindow import tabwidget
    tabwidget.TabWidget.MUTE_STRING = ""
    tabwidget.TabWidget.AUDIBLE_STRING = "🔊 "

    # Windowed fullscreen
    c.content.fullscreen.window = True

    # Download bar goes at the bottom
    c.downloads.position = "bottom"

    # Hint radius
    c.hints.radius = 5

    # Key popup radius
    c.keyhint.radius = 12

    # Prompt radius
    c.prompt.radius = 20

    # Don't hide window decorations
    c.window.hide_decoration = False


def load_other_aesthetics():
    # Always show completion
    c.completion.show = "always"

    #  Shrink autocomplete
    c.completion.shrink = True

    # Use pdf.js to view PDF files
    c.content.pdfjs = True


def load_settings():
    def settings_content():
        # Automatically play audio and videos
        c.content.autoplay = True

        # Only accept cookies from websites that have been visited in the past
        c.content.cookies.accept = "no-unknown-3rdparty"

        # Allow screen-sharing
        c.content.desktop_capture = True

        # Don't let websites track my location
        c.content.geolocation = False

        # Allow audio and video capture
        c.content.media.audio_capture = True
        c.content.media.video_capture = True
        c.content.media.audio_video_capture = True

        # Websites have to ask to show notifications
        c.content.notifications = "ask"

        # Don't allow Flash (HTML5 FTW!!!)
        c.content.plugins = False

        # Make websites ask to register their own URL protocols
        c.content.register_protocol_handler = "ask"

        # Always use SSL
        c.content.ssl_strict = True

        # User agent
        c.content.headers.user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; \
            x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 \
            Safari/537.36"

        # Set host blocking lists
        c.content.blocking.hosts.lists = [
            "https://easylist.to/easylist/easylist.txt",
            "https://easylist.to/easylist/easyprivacy.txt",
            "https://easylist.to/easylist/fanboy-annoyance.txt",
            "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/\
filters/filters.txt",
            "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/\
filters/annoyances.txt",
            "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/\
filters/badware.txt",
            "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/\
filters/privacy.txt",
            "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/\
filters/resource-abuse.txt",
            "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/\
filters/unbreak.txt",
            "https://www.malwaredomainlist.com/hostslist/hosts.txt"]

    def settings_hints():
        # Hint chars
        c.hints.chars = "asdfghjkl"

        # Don't leave hint mode when the page finishes loading
        c.hints.leave_on_load = False

        # Hint mode
        c.hints.mode = "letter"

        # Don't scatter hints
        c.hints.scatter = False

        # Custom hint selectors
        c.hints.selectors = {"all": ["span.inputField",
                                     "body", "span.kx3Hed",
                                     "div.n4xnA", "label.UISwitch",
                                     "span.UIToggle-option",
                                     "div.tpAuthSigninButton",
                                     "div.ui-button", "div.-button",
                                     "div.content-common-footer-button",
                                     "div.checkbox-and-option",
                                     "div.editable", "div._39fyP", "a",
                                     "area", "textarea", "select",
                                     "input:not([type=\"hidden\"])",
                                     "button", "frame", "iframe", "img",
                                     "link", "summary", "[onclick]",
                                     "[onmousedown]", "[role=\"link\"]",
                                     "[role=\"option\"]",
                                     "[role=\"button\"]", "[ng-click]",
                                     "[ngClick]", "[data-ng-click]",
                                     "[x-ng-click]", "[tabindex]"],
                             "images": ["img"],
                             "inputs": ["input[type=\"text\"]",
                                        "span.perseus-math-input",
                                        "input[type=\"date\"]",
                                        "input[type=\"datetime-local\"]",
                                        "input[type=\"email\"]",
                                        "input[type=\"month\"]",
                                        "input[type=\"number\"]",
                                        "input[type=\"password\"]",
                                        "input[type=\"search\"]",
                                        "input[type=\"tel\"]",
                                        "input[type=\"time\"]",
                                        "input[type=\"url\"]",
                                        "input[type=\"week\"]",
                                        "div.perseus-widget-container",
                                        "input:not([type])", "textarea"],
                             "links": ["a[href]", "area[href]",
                                       "link[href]",
                                       "[role=\"link\"][href]"],
                             "media": ["audio", "img", "video"],
                             "url": ["[src]", "[href]"]}

    def settings_input():
        # Don't forward unbound keys
        c.input.forward_unbound_keys = "none"

        # Don't automatically leave insert mode, ever
        c.input.insert_mode.auto_leave = False
        c.input.insert_mode.leave_on_load = False

        # 10 seconds for input to timeout if a binding remains unfinished
        c.input.partial_timeout = 10000

        # Don't allow spatial navigation
        c.input.spatial_navigation = False

    def settings_tabs():
        # Close Qutebrowser when the last tab is closed
        c.tabs.last_close = "close"

        # Open new tabs after the current tab
        c.tabs.new_position.related = "next"
        c.tabs.new_position.unrelated = "next"

        # Move to first tab when moving past last, and vice versa
        c.tabs.wrap = True

    """
    Load settings_content(), settings_hints(), settings_input(), and
    settings_tabs()
    """
    settings_content()
    settings_hints()
    settings_input()
    settings_tabs()

    # Set default editor
    c.editor.command = ["kitty", "-e", "nvim", "{}"]

    # Hide messages after 5 seconds
    c.messages.timeout = 5000

    # Smart case searching
    c.search.ignore_case = "smart"

    # Spell check
    c.spellcheck.languages = ["en-US"]

    # Use search engines as quickmarks
    c.url.open_base_url = True

    # Search engines
    c.url.searchengines = {
        "DEFAULT": "https://searx.envs.net/search?q={}",
        "ddg": "https://start.duckduckgo.com/?q={}",
        "g": "https://google.com/search?q={}",
        "gh": "https://github.com/{}",
        "r": "https://reddit.com/r/{}",
        "sh": "http://symbolhound.com/?q={}",
        "so": "http://stackse.com/?query={}",
        "sx": "https://searx.envs.net/search?q={}",
        "w": "https://en.wikipedia.org/wiki/Special:Search/{}"
    }

    # Searx as default new tab
    c.url.default_page = "https://searx.envs.net/"

    # Searx as start page
    c.url.start_pages = ["https://searx.envs.net/"]

    c.auto_save.session = True

    # Use the closest completion if there isn't an exact match
    c.completion.use_best_match = True

    # File selector
    c.fileselect.handler = "external"
    c.fileselect.single_file.command = [
        "kitty", "-e",
        "ranger",
        "--choosefile={}"
    ]
    c.fileselect.multiple_files.command = [
        "kitty", "-e",
        "ranger",
        "--choosefiles={}"
    ]


def load_bindings():
    modes = ["normal", "caret", "command", "insert", "prompt"]

    def alt_bindings():
        # Alt bindings that should apply to all modes
        for i in modes:
            # Alt+{hjkl} as arrow keys in all modes
            config.bind("<Alt+y>", "fake-key -g <left>", mode=i)
            config.bind("<Alt+n>", "fake-key -g <down>", mode=i)
            config.bind("<Alt+e>", "fake-key -g <up>", mode=i)
            config.bind("<Alt+o>", "fake-key -g <right>", mode=i)

    def ctrl_bindings():
        # Ctrl bindings that should apply to all modes
        for i in modes:
            """
            Ctrl+{bnpf} as arrow keys in all modes (readline/emacs-like
            bindings)
            """
            config.bind("<Ctrl+b>", "fake-key -g <left>", mode=i)
            config.bind("<Ctrl+n>", "fake-key -g <down>", mode=i)
            config.bind("<Ctrl+p>", "fake-key -g <up>", mode=i)
            config.bind("<Ctrl+f>", "fake-key -g <right>", mode=i)

    def normal_bindings():
        # Open mpv
        nmap(",m", ":spawn mpv {url}")

        # Use password manager for web passwords
        nmap(",p", ":spawn --userscript qute-pass")

        # Open current URL in the web archive
        nmap(",w", ":open https://web.archive.org/web/*/{url}")
        nmap(",W", ":open -t https://web.archive.org/web/*/{url}")

        # Turn on and off tor
        nmap(",t", ":config-cycle content.proxy socks://localhost:9050 system")

        # Clear messages
        nmap("cm", ":clear-messages")

        # C-S-w and C-w annoy me to no end - lets disable them
        nunmap("<Ctrl+Shift+w>")
        nunmap("<Ctrl+w>")

        # C-m to mute
        nmap("<Ctrl+m>", ":tab-mute")

        # C-t to open a new tab
        nmap("<Ctrl+t>", ":open -t")

        # Arrow keys to scroll
        nmap("<Left>", ":scroll left")
        nmap("<Right>", ":scroll right")
        nmap("<Up>", ":scroll up")
        nmap("<Down>", ":scroll down")

        # Make Tab and S-Tab work in normal mode
        nmap("<Tab>", ":fake-key <Tab>")
        nmap("<Shift+Tab>", ":fake-key <Shift+Tab>")

        # Unmap M
        nunmap("M")

        # T opens a list of tabs
        nmap("T", ":set-cmd-text -s :buffer")

        # Make a work like in Vim
        nmap("a", ":enter-mode insert ;; fake-key <Right>")

        # Remap d to dd (d is too easy to accidentally press)
        nunmap("d")
        nunmap("D")
        nmap("dd", ":tab-close")

        # go to open editor with current URL
        nmap("go", ":edit-url")

        # gt to focus <count>th tab
        nmap("gt", ":tab-focus")

        # hjkl use scroll-px instead of scroll
        nmap("h", ":scroll-px -100 0")
        nmap("j", ":scroll-px 0 100")
        nmap("k", ":scroll-px 0 -100")
        nmap("l", ":scroll-px 100 0")

        # xb xt and xx to show and hide the statusbar and tabs
        nmap("xb", ":config-cycle statusbar.show always in-mode")
        nmap("xt", ":config-cycle tabs.show always switching")
        nmap("xx", ":config-cycle statusbar.show always in-mode ;; config-cycle\
 tabs.show always switching")

        # nnoremap ; : | nnoremap : ;
        nmap(";", ":set-cmd-text :")
        nunmap(":")
        nmap(":a", ":hint --rapid all")
        nmap(":b", ":hint all tab-bg")
        nmap(":f", ":hint all tab-fg")
        nmap(":h", ":hint all hover")
        nmap(":i", ":hint images")
        nmap(":I", ":hint images tab")
        nmap(":o", ":hint links fill :open {hint-url}")
        nmap(":O", ":hint links fill :open -t -r {hint-url}")
        nmap(":y", ":hint links yank")
        nmap(":Y", ":hint links yank-primary")
        nmap(":r", ":hint --rapid links tab-bg")
        nmap(":R", ":hint --rapid links window")
        nmap(":d", ":hint links download")
        nmap(":t", ":hint inputs")

        # Switch the behavior of J and K
        nmap("J", ":tab-prev")
        nmap("K", ":tab-next")

    # Load alt key bindings
    alt_bindings()

    # Load ctrl key bindings
    ctrl_bindings()

    # Load normal mode key bindings
    normal_bindings()

    # "s" to search for the currently selected text with Searx
    vmap("s", "open {sx}")

    # "d" and "x" to delete selected text
    vmap("d", ":fake-key <Control+x> ;; leave-mode")
    vmap("x", ":fake-key <Control+x> ;; leave-mode")

    # Arrow keys don't make much sense to me in command mode. Let's fix that!
    cmap("<Down>", ":command-history-next")
    cmap("<Up>", ":command-history-prev")

    # <Ctrl+h> as <Backspace>
    imap("<Ctrl+h>", "<Backspace>")

    """
    Vim-like insert bindings, Just append Alt to the definition for most keys
    and leave it as it is for Control definitions
    (e.g, dd => M-d d && C-r => C-r)
    """
    # Deletion
    imap("<Ctrl+w>", "<Ctrl+Shift+Left><Ctrl+x>")
    imap("<Alt+d>d", "<Home><Left><Shift+Right><Shift+End><Control+x>")
    imap("<Alt+d>$", "<Shift+End><Control+x>")
    imap("<Alt+d>^", "<Shift+Home><Control+x>")
    imap("<Alt+d>w", "<Ctrl+Shift+Right><Ctrl+x>")
    # Undo/redo
    imap("<Alt+u>", "<Ctrl+z><Right>")
    imap("<Ctrl+r>", "<Ctrl+Shift+z><Right>")

    # Set langmap for Workman layout
    #langmap("qq,dw,re,wr,bt,jy,fu,ui,po,;p,aa,ss,hd,tf,gg,yh,nj,ek,ol,i;,zz,xx,mc,cv,vb,kn,lm,QQ,DW,RE,WR,BT,JY,FU,UI,PO,:P,AA,SS,HD,TF,GG,YH,NJ,EK,OL,I:,ZZ,XX,MC,CV,VB,KN,LM")


# Load configuration functions
try:
    config.load_autoconfig(False)
    load_theme()
    load_other_aesthetics()
    load_settings()
    load_bindings()
    message.info("Configuration file loaded without errors")
except Exception:
    message.error("Error in configuration: " + traceback.format_exc())


# vim:foldlevel=0
