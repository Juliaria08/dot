;; CalcTex
(package! calctex :recipe (:host github :repo "johnbcoughlin/calctex"
                           :files ("*.el" "calctex/*.el" "calctex-contrib/*.el" "org-calctex/*.el"))
  :pin "7fa2673c64...")

;; Latex
(package! auto-activating-snippets :recipe
  (:host github :repo "ymarco/auto-activating-snippets")
  :pin "8a3ef55002...")
(package! latex-auto-activating-snippets
  :recipe (:local-repo "lisp/LaTeX-auto-activating-snippets"))
