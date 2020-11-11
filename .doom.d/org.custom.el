;; Org
;; Mode
(unpin! org-mode)
;; Agenda
(package! org-super-agenda :pin "3264255989...")
;; Doct
(package! doct
  :recipe (:host github :repo "progfolio/doct")
  :pin "dabb30ebea...")
(package! org-pretty-table-mode
  :recipe (:host github :repo "Fuco1/org-pretty-table") :pin "88380f865a...")
(package! org-fragtog :pin "92119e3ae7...")
(package! org-pretty-tags :pin "40fd72f3e7...")
