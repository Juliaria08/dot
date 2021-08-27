#!/bin/sh

cat <<EOF | xmenu | sh &
Terminal	kitty
Web Browser	firefox
Calendar	kitty -e 'calcurse'

Productivity
	Mail $(mailbox)	kitty -e 'neomutt'
	Sync Mail	mw -Y
	Calendar	kitty -e 'calcurse'
Entretaiment
	MpvClip	mpvclip
	Youtube	kitty -e 'youtube-viewer'
	Image editor	gimp
	Char Map	gucharmap
	 Chromium	~/Documents/apps/ugc.AppImage
	Libre Sprite	~/Documents/apps/LibreSprite.AppImage
	Mumble	mumble
	Recording
		Camera	mpv --no-cache --no-osc --no-input-default-bindings --input-conf=/dev/null --title=webcam $(ls /dev/video[0,2,4,6,8] | tail -n 1)
		Record	dmenurecord
		kittyop Recording	dmenurecord kill
		Toogle screenkey	killall screenkey || screenkey &
	Music
		Ncmpcpp	kitty -e 'ncmpcpp'
		Spotify	LD_PRELOAD=/usr/local/lib/spotify-adblock.so spotify
Config / SysMonitors
	PulseMixer	kitty -e 'pulsemixer'
	Htop	kitty -e 'htop'
	Network Manager TUI	sudo -A kitty -e nmtui
* Managers
	Password Managers
		Pass	passmenu
	File Managers
		lf	kitty -e 'lf'
		vifm	kitty -e 'vifm'
		Nemo	nemo
EOF
