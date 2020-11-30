#!/bin/sh

cat <<EOF | xmenu | sh &
Terminal	st
Web Browser	brave
Calendar	st -e 'calcurse'

Productivity
	Mail $(mailbox)	st -e 'neomutt'
	Sync Mail	mw -Y
	Calendar	st -e 'calcurse'
Entretaiment
	MpvClip	mpvclip
	Youtube	st -e 'youtube-viewer'
	Image editor	gimp
	Char Map	gucharmap
	 Chromium	~/Documents/apps/ugc.AppImage
	Libre Sprite	~/Documents/apps/LibreSprite.AppImage
	Recording
		Camera	mpv --no-cache --no-osc --no-input-default-bindings --input-conf=/dev/null --title=webcam $(ls /dev/video[0,2,4,6,8] | tail -n 1)
		Record	dmenurecord
		Stop Recording	dmenurecord kill
		Toogle screenkey	killall screenkey || screenkey &
	Music
		Ncmpcpp	st -e 'ncmpcpp'
		Spotify	LD_PRELOAD=/usr/local/lib/spotify-adblock.so spotify
Config / SysMonitors
	PulseMixer	st -e 'pulsemixer'
	Htop	st -e 'htop'
	Network Manager TUI	sudo -A st -e nmtui
* Managers
	Password Managers
		Pass	passmenu
	File Managers
		lf	st -e 'lf'
		vifm	st -e 'vifm'
		Nemo	nemo
EOF
