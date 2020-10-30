let mapleader =","

set bg=dark
set go=a
set nohlsearch
set clipboard+=unnamedplus

" Some basics:
nnoremap c "_c
set nocompatible
filetype plugin on
syntax on
set encoding=utf-8
set number relativenumber

" Replace ex mode with gq
map Q gq

" Check file in shellcheck:
map <leader>s :!clear && shellcheck %<CR>

" Open my bibliography file in split
map <leader>b :vsp<space>$BIB<CR>
map <leader>r :vsp<space>$REFER<CR>

" Replace all is aliased to S.
nnoremap S :%s//g<Left><Left>

" {{{ Basic Settings

" Modelines
set modelines=2
set modeline

" For clever completion with the :find command
set path+=**

" Always use bash syntax for sh filetype
let g:is_bash=1

" Color scheme
color default

" Search
set ignorecase smartcase
set grepprg=grep\ -IrsnH

" Window display
set showcmd ruler laststatus=2

" Splits
set splitright

" Buffers
set history=500
set hidden
if exists("&undofile")
    set undofile
endif

" Text display
set listchars=trail:.,tab:>-,extends:>,precedes:<,nbsp:¬
set list

" Typing behavior
set backspace=indent,eol,start
set showmatch
set wildmode=full
set wildmenu
set complete-=i

" Formatting
set nowrap
set tabstop=2 shiftwidth=2 softtabstop=2
set foldlevelstart=2

" Status line
set statusline=%!MyStatusLine()

" Session saving
set sessionoptions=blank,buffers,curdir,folds,help,tabpages,winsize,localoptions

" Word splitting
set iskeyword+=-

" Quickly change search hilighting
nnoremap <silent> ; :set invhlsearch<CR>

" Change indent continuously
vmap < <gv
vmap > >gv

" }}}

function! MyStatusLine()
    let statusline = ""
    " Filename (F -> full, f -> relative)
    let statusline .= "%f"
    " Buffer flags
    let statusline .= "%( %h%1*%m%*%r%w%) "
    " File format and type
    let statusline .= "(%{&ff}%(\/%Y%))"
    " Left/right separator
    let statusline .= "%="
    " Line & column
    let statusline .= "(%l,%c%V) "
    " Character under cursor (decimal)
    let statusline .= "%03.3b "
    " Character under cursor (hexadecimal)
    let statusline .= "0x%02.2B "
    " File progress
    let statusline .= "| %P/%L"
    return statusline
endfunction
