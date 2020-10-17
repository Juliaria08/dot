#!/bin/sh

cat <<EOF | xmenu | sh &
Terminal	st
Web Browser	brave

Cli Apps
	Mail
		Mail	st -e 'neomutt'
		Sync Mail	mw -Y
	Calendar	st -e 'calcurse'
	PulseMixer	st -e 'pulsemixer'
	Music Player	st -e 'ncmpcpp'
	File Managers
		lf	st -e 'lf'
		vifm	st -e 'vifm'
	Recording
		Camera	mpv --no-cache --no-osc --no-input-default-bindings --input-conf=/dev/null --title=webcam $(ls /dev/video[0,2,4,6,8] | tail -n 1)
		Record	dmenurecord
		Stop Recording	dmenurecord kill
		Toogle screenkey	killall screenkey || screenkey &
	Youtube	st -e 'youtube-viewer'
	Config
		Network Manager TUI	sudo -A st -e nmtui
Gui Apps
	* Managers
		Password Managers
			Pass	passmenu
			Keepass	keepassxc
		File Manager	pcmanfm
		Wallpaper Manager	nitrogen
	Image editor	gimp
	Char Map	gucharmap

EOF
