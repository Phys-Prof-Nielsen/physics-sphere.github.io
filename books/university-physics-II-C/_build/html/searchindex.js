Search.setIndex({"docnames": ["Module-C1/E-field-system", "Module-C1/problemsC1", "Module-C1/solving-methodology", "intro"], "filenames": ["Module-C1/E-field-system.ipynb", "Module-C1/problemsC1.ipynb", "Module-C1/solving-methodology.ipynb", "intro.md"], "titles": ["C1.1 Electric Field - System of Charges", "C1.X Problems", "C1.2 Solving Methodology - Charge Distributions", "A Competency Approach to University Physics II: A Compendium to the D Exam"], "terms": {"In": 0, "phase": 0, "d": 0, "we": [0, 2], "saw": 0, "how": [0, 1], "obtain": [0, 2], "from": [0, 1, 2], "often": 0, "ar": [0, 2], "present": [0, 2], "object": 0, "like": [0, 2], "exampl": [0, 2], "wire": [0, 1], "conduct": [0, 1], "disk": 0, "net": 0, "non": 0, "zero": 0, "us": [0, 2], "capacitor": 0, "To": 0, "find": [0, 1, 2], "surround": 0, "must": 0, "develop": 0, "new": 0, "skill": 0, "tool": 0, "b": 0, "gauss": 0, "s": 0, "law": 0, "which": [0, 2], "under": 0, "certain": 0, "geometr": 0, "configur": 0, "allow": 0, "somewhat": 0, "conveni": 0, "wai": 0, "more": 0, "conceptu": 0, "approach": [0, 2], "realli": 0, "onli": 0, "applic": 0, "few": 0, "case": 0, "where": [0, 1], "calcul": [0, 1], "simpl": 0, "enough": 0, "too": 0, "difficult": 0, "solv": 0, "reli": 0, "consid": [0, 1], "being": 0, "construct": 0, "finit": 0, "infinit": [0, 1], "number": [0, 1], "thi": [0, 1, 2, 3], "section": [0, 2], "detail": 0, "later": 0, "previou": 0, "could": [0, 2], "describ": 0, "through": 0, "vec": [0, 1, 2], "e": [0, 1, 2], "frac": [0, 1, 2], "kq": [0, 1, 2], "r": [0, 2], "hat": [0, 1], "tag": [0, 2], "unit": [0, 1], "vector": [0, 2], "direct": [0, 1], "line": [0, 1, 2], "segment": 0, "sourc": 0, "q": [0, 1], "interest": 0, "altern": 0, "can": 0, "definit": 0, "care": 0, "appli": 0, "abov": [0, 2], "equat": [0, 2], "connect": 0, "posit": [0, 1, 2], "A": [0, 1], "gener": 0, "directli": 0, "ti": 0, "prefer": [0, 2], "If": 0, "insert": [0, 2], "actual": 0, "p": [0, 1, 2], "box": 0, "5": [0, 1], "00": [0, 1], "mc": 0, "locat": 0, "origin": [0, 1], "what": [0, 1], "x": 0, "y": [0, 1], "textrm": 0, "m": [0, 1], "reset": [0, 1], "f": [0, 1], "import": [0, 1], "numpi": 0, "np": 0, "input": 0, "paramet": 0, "00e": 0, "k": 0, "8": [0, 1], "99e9": 0, "xp": 0, "yp": 0, "magnitud": [0, 1], "distanc": [0, 1, 2], "awai": 0, "sqrt": [0, 1], "compon": 0, "form": [0, 2], "ex": [0, 1], "ey": [0, 1], "2e": 0, "format": 0, "combin": 0, "an": [0, 1], "arrai": 0, "easier": 0, "print": [0, 1], "all": [0, 2], "The": [0, 1, 2, 3], "str": 0, "n": 0, "c": [0, 1, 3], "44e": 0, "06": 0, "76e": 0, "05": 0, "x1": 0, "y1": 0, "magnitiud": 0, "26e": 0, "42e": 0, "total": [0, 1], "sum": 0, "individu": 0, "kq_i": 0, "r_": 0, "i": [0, 1, 2], "_i": 0, "q_i": 0, "each": 0, "similarli": 0, "write": [0, 2], "variou": [0, 2], "_": 0, "6": [0, 1], "second": 0, "7": 0, "q1": 0, "q2": 0, "0": [0, 1], "x2": 0, "y2": 0, "r1": 0, "r2": 0, "e1x": 0, "e1i": 0, "e2x": 0, "e2i": 0, "15e": 0, "47e": 0, "At": 0, "some": [0, 2], "becom": 0, "larg": 0, "type": 0, "instead": 0, "particl": 0, "infti": 0, "integr": [0, 1, 2], "over": 0, "dq": [0, 1, 2], "express": [0, 1, 2], "continuo": 0, "term": [0, 1, 2], "densiti": [0, 1, 2], "lambda": [0, 1, 2], "dl": [0, 2], "surfac": [0, 2], "sigma": [0, 2], "da": [0, 2], "volum": [0, 2], "rho": [0, 2], "dv": [0, 2], "begin": 0, "align": 0, "int_": 0, "end": 0, "involv": 0, "multivari": 0, "calculu": 0, "wait": 0, "until": 0, "explor": 0, "topic": 0, "For": 0, "now": 0, "break": 0, "our": 0, "comfort": 0, "1d": 0, "1": 1, "uniformli": 1, "ring": 1, "radiu": 1, "charg": 1, "situat": 1, "yz": 1, "plane": 1, "refer": 1, "frame": 1, "its": [1, 2], "center": 1, "show": 1, "electr": [1, 2], "field": [1, 2], "point": [1, 2], "along": 1, "axi": 1, "given": 1, "kqx": 1, "2": 1, "3": [1, 2], "hint": 1, "consist": 1, "due": 1, "singl": 1, "linear": 1, "dii": 1, "cell": 1, "25": 1, "4": 1, "50": 1, "nc": 1, "cm": 1, "10": 1, "distribut": 1, "between": [1, 2], "doe": 1, "behav": [1, 2], "long": 1, "sympi": 1, "sym": 1, "abc": 1, "dex": 1, "dei": 1, "12837916709551": 1, "pi": 1, "time": 1, "slightli": 1, "modifi": 1, "version": 1, "openstax": 1, "access": 1, "free": 1, "here": [1, 2], "per": 1, "length": 1, "thin": 1, "semicircular": 1, "shown": 1, "below": [1, 2], "first": [2, 3], "set": 3, "note": 3, "uivers": 3, "courc": 3, "cover": 3, "materi": 3, "requir": 3, "pass": 3, "level": 3, "There": 2, "your": 2, "textbook": 2, "have": 2, "video": 2, "so": 2, "forth": 2, "am": 2, "one": 2, "let": 2, "down": 2, "infinitesim": 2, "spatial": 2, "size": 2, "step": 2, "taken": 2, "follow": 2, "illustr": 2, "make": 2, "sketch": 2, "want": 2, "know": 2, "well": 2, "see": 2, "usual": 2, "done": 2, "cartesian": 2, "xyz": 2, "coordin": 2, "system": 2, "also": 2, "cylindr": 2, "theta": 2, "z": 2, "pythagorean": 2, "theorem": 2, "inform": 2, "It": 2, "accept": 2, "look": 2, "tabl": 2, "comput": 2, "method": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"c1": [0, 1, 2], "1": [0, 2], "electr": 0, "field": 0, "system": 0, "charg": [0, 2], "motiv": 0, "2": [0, 2], "review": 0, "point": 0, "3": 0, "discret": 0, "distribut": [0, 2], "4": 0, "continu": 0, "district": 0, "x": 1, "problem": 1, "A": 3, "compet": 3, "approach": 3, "univers": 3, "physic": 3, "ii": 3, "compendium": 3, "d": 3, "exam": 3, "solv": 2, "methodolog": 2, "set": 2, "up": 2}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})