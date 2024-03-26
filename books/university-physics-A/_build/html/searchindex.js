Search.setIndex({"docnames": ["Module-A1/Numerical-methods", "Module-A1/Numerical-methods-practice", "Module-A1/Project-1-Covid-19", "Module-A1/Project-2-Artillery", "Module-A1/Taylor-expansions", "Module-A2/angular-momentum", "Module-A2/problemsA2", "Module-A2/translational-rotational", "intro"], "filenames": ["Module-A1/Numerical-methods.ipynb", "Module-A1/Numerical-methods-practice.ipynb", "Module-A1/Project-1-Covid-19.ipynb", "Module-A1/Project-2-Artillery.ipynb", "Module-A1/Taylor-expansions.ipynb", "Module-A2/angular-momentum.ipynb", "Module-A2/problemsA2.ipynb", "Module-A2/translational-rotational.ipynb", "intro.md"], "titles": ["A1.2 Numerical Integration: Finite Difference Methods", "A1.3 Numerical Methods - Practice", "A1.4 Realistic Projectile Motion Project 1: Covid-19", "A1.5 Realistic Projectile Motion Project 2: Artillery", "A1.1 Taylor Expansions", "A2.1 Angular Momentum Revisited", "A2.x Problems", "A2.2 A Note on Combined Translational and Rotational Angular Speed", "A Competency Approach to Introductory Physics: A Compendium to the A Exam"], "terms": {"we": [0, 1, 2, 3, 4, 5, 7], "see": [0, 2, 4, 6, 7], "mani": [0, 1, 4, 6], "exampl": [0, 1, 4, 5], "encount": 0, "physic": [0, 4, 5, 6], "i": [0, 1, 2, 4, 5, 6], "come": 0, "assumpt": 0, "make": [0, 2, 3, 4, 5, 6], "them": [0, 1, 2], "less": [0, 2, 4], "applic": [0, 1, 4], "everydai": 0, "life": [0, 1, 2, 4], "while": [0, 1, 2, 6, 7], "ar": [0, 1, 2, 4, 5, 6, 7], "great": [0, 3], "illustr": [0, 4], "import": [0, 2, 4, 5, 6], "concept": [0, 4, 5], "thei": [0, 6], "fail": 0, "provid": [0, 5, 7], "accur": 0, "predict": 0, "real": [0, 1], "when": [0, 1, 4, 5, 7], "valid": 0, "our": [0, 1, 2, 4, 5, 6], "problem": [0, 1, 4], "often": [0, 1, 4], "becom": [0, 2, 3, 4], "too": [0, 4], "difficult": [0, 2], "obtain": [0, 4], "exact": [0, 4, 7], "solut": [0, 1, 2, 4], "best": 0, "effort": 0, "approxim": [0, 1, 2, 3, 4], "correct": 0, "within": [0, 2, 4], "set": [0, 2, 4, 8], "accept": 0, "error": [0, 1, 4], "margin": 0, "As": [0, 4], "an": [0, 1, 2, 3, 4, 5, 6, 7], "newton": 0, "s": [0, 1, 2, 3, 5, 6, 7], "second": [0, 2, 4, 6], "law": [0, 1], "differenti": [0, 1, 2], "equat": [0, 4, 6], "which": [0, 1, 2, 4, 5, 7], "non": [0, 4, 5], "onli": [0, 2, 4], "solveabl": 0, "through": [0, 1, 2, 4, 5], "under": [0, 5], "certain": [0, 4], "situat": 0, "can": [0, 1, 2, 3, 4, 5, 6, 7], "transform": [0, 2], "coupl": [0, 1, 2], "solv": [0, 2, 4, 6], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8], "object": [0, 3, 6, 7], "thi": [0, 1, 2, 4, 5, 6, 7, 8], "note": [0, 4, 8], "scheme": [0, 2], "known": [0, 2, 4], "let": [0, 2, 4, 7], "us": [0, 1, 2, 4, 6, 7], "consid": [0, 1, 3, 4, 5, 6, 7], "graphic": [0, 4], "setup": 0, "below": [0, 2, 4, 6, 7], "assum": [0, 1, 2, 3, 5], "have": [0, 1, 2, 4, 5, 7], "knowledg": [0, 1], "data": [0, 1], "point": [0, 1, 4, 7], "coordin": [0, 7], "x_0": [0, 1], "f": [0, 1, 2, 4, 5, 6], "function": [0, 1, 3, 4], "x": [0, 1, 2, 4, 5, 7], "desir": [0, 1, 2], "about": [0, 1, 2, 4, 5, 7], "p": [0, 5], "close": [0, 2, 4], "proxim": [0, 2, 4], "In": [0, 1, 2, 3, 4, 5], "figur": [0, 2, 4, 6, 7], "blue": [0, 4], "line": [0, 2, 4, 5, 7], "repres": [0, 2, 4], "red": [0, 4], "tangent": 0, "represent": [0, 4], "think": 0, "intercept": 0, "rise": 0, "form": [0, 2, 4], "y": [0, 2, 3, 5], "A": [0, 2, 4, 5, 6], "bx": 0, "l": [0, 5], "left": [0, 1, 2, 3, 4, 7], "frac": [0, 1, 2, 3, 4], "df": [0, 1, 2, 4], "dx": [0, 1, 2, 4, 6], "right": [0, 1, 2, 3, 4, 6], "_": [0, 4, 5], "tag": [0, 1, 2, 4], "If": [0, 1, 2, 4, 6, 7], "call": [0, 4, 5], "from": [0, 2, 3, 4, 5, 6, 7], "guess": 0, "introduc": [0, 5], "good": 0, "veri": [0, 2, 4], "would": 0, "how": [0, 2, 4, 6], "big": 0, "more": [0, 2, 4, 5, 7], "rigor": [0, 4], "approach": [0, 1, 2, 4], "next": [0, 1, 2, 4], "help": 0, "calculu": [0, 4], "tell": 0, "well": [0, 1, 2, 4, 5], "behav": [0, 4], "written": [0, 1, 4], "sum": [0, 4], "infinit": [0, 4], "polynomi": [0, 4], "inform": [0, 4], "some": [0, 1, 4, 7], "d": [0, 1, 2, 4], "cdot": [0, 4], "With": [0, 4], "notat": [0, 1], "abov": [0, 1, 2, 4, 5, 6, 7], "discuss": 0, "so": [0, 1, 2, 4, 6], "re": 0, "write": [0, 1, 5], "inst": 0, "am": [0, 2, 4], "sinc": [0, 2], "familiar": [0, 4, 7], "delta": [0, 1, 2], "get": [0, 1, 2, 6], "At": [0, 1, 5, 7], "done": [0, 1, 2], "anyth": 0, "other": [0, 1, 2, 4, 6], "than": [0, 6, 7], "howev": [0, 1, 2], "mai": [0, 1, 2, 3, 4, 5, 7, 8], "evid": [0, 2, 7], "now": [0, 1, 2, 4, 7], "hand": 0, "side": [0, 1, 4], "evalu": [0, 1], "ahead": 0, "That": 0, "actual": [0, 4], "pretti": [0, 1, 4], "cool": [0, 1], "feel": 0, "overwhelm": 0, "pleas": 0, "do": [0, 1, 2, 4], "panic": 0, "show": [0, 2, 4, 6], "step": [0, 1, 2], "toward": 0, "numerical": 0, "those": [0, 2], "you": [0, 2, 4], "confid": [0, 4], "what": [0, 1, 2, 3, 4, 5, 6], "behind": 0, "door": 0, "focu": 0, "class": [0, 4], "appli": [0, 1, 2, 4, 6], "yet": [0, 2], "just": [0, 2, 4, 5], "plain": 0, "arithmet": 0, "subract": 0, "both": [0, 1, 5, 6], "divid": 0, "all": [0, 1, 2, 4, 7, 8], "term": [0, 2, 4], "express": [0, 2, 6], "includ": [0, 1, 2, 3, 4, 7], "deriv": [0, 1, 2, 4, 6], "simpli": [0, 5, 7], "refer": [0, 5], "fact": [0, 3, 4, 7], "limit": [0, 2], "number": [0, 2], "sim": [0, 1, 2, 4], "notic": [0, 3, 7], "chang": [0, 1, 5], "also": [0, 2, 5, 7], "similar": [0, 2, 4, 5], "one": [0, 1, 2, 6], "element": [0, 2, 4], "two": [0, 1, 2, 4, 6], "apart": 0, "wherea": 0, "wa": [0, 2], "unknown": [0, 1], "expans": 0, "magnitud": [0, 2, 4, 7], "estim": [0, 2, 4], "each": [0, 1, 2, 4], "success": 0, "smaller": [0, 1, 2, 3], "previou": [0, 5], "requir": [0, 1, 4, 6, 8], "converg": [0, 4], "largest": 0, "ignor": [0, 2, 4], "henc": [0, 1], "mathcal": [0, 4], "o": [0, 4], "read": [0, 4], "professor": 0, "why": [0, 6, 7], "go": [0, 2], "lengthi": 0, "run": 0, "simplest": 0, "could": [0, 5], "further": 0, "down": [0, 6], "box": [0, 1, 4, 5, 7], "exercis": [0, 6], "process": [0, 1, 2], "my": 0, "textbook": [0, 2], "need": [0, 1, 2, 4], "know": [0, 1], "becaus": 0, "realist": 0, "wai": [0, 5], "physicist": 0, "engin": [0, 4], "far": [0, 6], "alwai": [0, 7], "friction": [0, 1, 3, 6, 7], "properti": 0, "materi": [0, 8], "softwar": 0, "deal": [0, 1], "discret": 0, "math": 0, "game": 0, "full": 0, "It": [0, 1, 2, 6, 7], "lai": [0, 5], "section": [0, 2], "updat": [0, 1, 2], "valu": [0, 1, 3, 4, 6], "base": [0, 5], "conveni": 0, "subscript": [0, 1, 2], "intuit": [0, 7], "respect": [0, 2, 5], "implement": [0, 2], "comput": [0, 1, 2, 4], "script": [0, 2, 4], "x_": [0, 2], "x_i": 0, "f_": [0, 1, 2], "f_i": [0, 1], "tool": [0, 3, 4], "understand": [0, 7], "certainli": 0, "cours": [0, 2, 4], "essenti": 0, "given": [0, 1, 3, 5, 6, 7], "singl": [0, 2, 5], "model": [0, 1, 2, 3], "simpl": [0, 4], "analyt": [0, 2], "demonstr": 0, "follow": [0, 1, 2, 3, 5, 6, 7], "condit": [0, 1, 2], "y_0": 0, "0": [0, 1, 2, 3, 4, 5, 6, 7], "dy": [0, 2], "find": [0, 1, 2, 4, 5, 6, 7], "5": [0, 1, 4, 5, 6, 7], "util": [0, 4], "cast": 0, "try": [0, 2], "accord": [0, 1], "case": [0, 1, 2, 7], "depend": [0, 1, 2], "variabl": [0, 1], "y_": [0, 2], "y_i": 0, "start": [0, 1, 2, 6], "initi": [0, 1, 2, 6], "progress": [0, 8], "chosen": 0, "size": [0, 1, 2, 5], "iter": [0, 1], "learn": [0, 2], "proper": 0, "choic": [0, 6], "regard": [0, 4], "most": [0, 2], "without": [0, 3, 6], "jeopard": 0, "speed": [0, 2, 5, 6], "beyond": 0, "scope": 0, "replac": [0, 1, 2, 5], "got": 0, "attach": [0, 1], "reason": 0, "must": [0, 2], "convert": [0, 2], "continu": 0, "until": [0, 1], "reach": [0, 1, 3, 6], "interv": 0, "x_1": 0, "y_1": 0, "t": [0, 1, 2, 5, 7], "x_2": 0, "y_2": 0, "x_3": 0, "y_3": 0, "x_4": 0, "y_4": 0, "14": 0, "x_5": 0, "y_5": 0, "30": [0, 2, 6], "quick": 0, "comparison": [0, 2], "between": [0, 2, 7], "42": 0, "quit": 0, "bit": [0, 4], "off": 0, "larg": [0, 1, 2, 4], "significantli": [0, 2, 4], "over": [0, 1, 2], "should": [0, 1, 4, 7], "vari": 0, "repeat": [0, 1, 3], "stepsiz": 0, "01": [0, 2], "hold": 0, "50": [0, 5], "time": [0, 1, 2, 3, 4, 5, 6], "No": 0, "dude": 0, "python": [0, 2], "rescu": 0, "numpi": [0, 2, 4, 5, 6], "np": [0, 2, 4, 5, 6], "matplotlib": [0, 2, 4], "pyplot": [0, 2, 4], "plt": [0, 2, 4], "inlin": [0, 2, 4], "x_f": 0, "nstep": [0, 1], "int": [0, 1], "rang": [0, 1, 3], "print": [0, 1, 2, 5, 6], "str": [0, 1, 5, 6], "40": [0, 5, 6], "42500000000002": 0, "percent": 0, "textrm": [0, 1, 4], "100": 0, "425": 0, "8": [0, 1, 2, 6], "anticip": 0, "result": [0, 7], "compar": 0, "chose": 0, "visual": 0, "arang": [0, 4], "append": [0, 2], "plot": [0, 2, 4], "ylabel": [0, 2, 4], "xlabel": [0, 2, 4], "ax": [0, 2, 4, 6], "gca": [0, 2, 4], "b": [0, 2, 3, 4, 5], "r": [0, 2, 4, 5, 6, 7], "set_xlim": [0, 2, 4], "min": [0, 4], "max": [0, 2, 4], "set_ylim": [0, 2, 4], "here": [0, 1, 2, 3, 4], "isn": 0, "amaz": 0, "varieti": 0, "complex": [0, 4, 5], "otherwis": [0, 1], "cover": [0, 4, 8], "practic": 0, "end": [0, 4, 6], "semest": [0, 4], "hope": [0, 4], "much": [0, 6], "better": [0, 4], "appreci": 0, "your": 0, "turn": 0, "test": 0, "skill": 0, "subject": 0, "separ": 0, "where": [0, 1, 2, 3, 4, 5, 6, 7], "brief": 0, "summari": 0, "sort": [0, 4], "guid": 0, "strategi": 0, "final": [0, 4, 6], "work": [0, 2, 6, 8], "backward": 0, "gain": [0, 4], "prior": 0, "combin": 0, "central": 0, "emploi": 0, "either": [0, 2, 4], "curiou": 0, "check": 0, "out": [0, 1, 2, 4, 6], "creat": 0, "standard": [1, 2], "integr": [1, 2], "scenario": [1, 2], "acceler": [1, 2, 3, 6], "veloc": [1, 2, 3, 5, 6], "posit": [1, 2, 6], "want": 1, "someth": [1, 2], "occur": 1, "interact": [1, 2], "netwon": 1, "explor": [1, 2, 5], "forward": [1, 2], "first": [1, 2, 4, 5, 8], "order": [1, 2, 4], "interest": [1, 3], "its": [1, 2, 5, 6, 7], "dt": [1, 2], "t_": 1, "t_i": 1, "index": 1, "indic": 1, "altern": 1, "explan": 1, "instantan": [1, 2], "slope": 1, "identifi": [1, 2, 4], "present": [1, 4], "isol": 1, "rightarrow": [1, 2], "On": 1, "doe": [1, 2, 5, 6], "zero": [1, 4, 5, 7], "algebra": 1, "choos": [1, 2], "paper": 1, "unless": 1, "state": 1, "rule": 1, "thumb": 1, "consider": [1, 2], "expect": [1, 4], "t_0": [1, 3], "f_0": 1, "calcul": [1, 2, 4], "t_1": 1, "f_1": 1, "7": [1, 2, 5, 6], "insert": [1, 2, 4], "particl": [1, 2], "vt": 1, "direct": [1, 2, 5, 7], "00": [1, 3, 6], "m": [1, 2, 3, 5, 6, 7], "explicitli": 1, "dv": 1, "aleradi": 1, "v_": [1, 2, 7], "4": [1, 3, 4, 6, 7], "v": [1, 2, 3, 4, 5, 6], "6": [1, 3, 4, 5, 6], "16": [1, 5], "move": [1, 2, 5, 7], "dii": 1, "cell": 1, "t_f": 1, "150114570624213": 1, "travel": [1, 2, 5, 6], "tangl": 1, "up": [1, 4, 6], "mathemat": [1, 4], "mess": 1, "who": [1, 2, 4], "xt": 1, "6004177607873036": 1, "same": [1, 5, 6, 7], "hint": [1, 4, 7], "alreadi": 1, "rememb": 1, "relationship": [1, 7], "new": 1, "principl": 1, "eh": 1, "9": [1, 2, 6], "468969364806515": 1, "recommend": 2, "safe": 2, "distanc": [2, 6, 7], "ft": 2, "spread": 2, "sar": 2, "cov": 2, "viru": 2, "realli": 2, "put": 2, "forth": 2, "scientist": 2, "bare": 2, "pass": [2, 8], "kinemat": [2, 6], "allow": 2, "studi": 2, "trajectori": 2, "parameter": 2, "being": [2, 5], "vertic": [2, 6], "xy": [2, 5, 7], "plane": [2, 5, 6, 7], "dictat": 2, "velocit": 2, "obvious": [2, 3], "graviti": 2, "act": 2, "futher": 2, "due": [2, 6], "after": [2, 4], "leav": 2, "host": 2, "pandem": 2, "caus": 2, "predominantli": 2, "transmiss": 2, "via": 2, "talk": [2, 5], "cough": 2, "effect": [2, 3], "novel": 2, "natur": 2, "affect": 2, "everyon": 2, "sever": 2, "death": 2, "major": 2, "peopl": 2, "exhibit": 2, "cold": 2, "like": [2, 5], "symptom": 2, "impli": [2, 7], "clear": 2, "pictur": 2, "long": 2, "catiou": 2, "behavior": 2, "social": 2, "absolut": 2, "ridicul": 2, "clearli": 2, "goal": 2, "avoid": 2, "take": [2, 6], "place": [2, 3], "phone": 2, "ha": [2, 4, 5, 6], "capabl": 2, "transmit": 2, "coin": 2, "politician": 2, "liber": 2, "art": 2, "graduat": 2, "ment": 2, "joke": 2, "noth": 2, "againt": 2, "career": 2, "educ": 2, "okai": 2, "last": 2, "anoth": [2, 6], "among": 2, "arrog": 2, "terminolog": 2, "still": 2, "mindboggl": 2, "me": 2, "measur": 2, "appar": 2, "feet": 2, "hei": 2, "attempt": 2, "vec": [2, 5, 6], "a_x": 2, "a_i": 2, "unfortun": 2, "finit": 2, "differ": 2, "de": 2, "give": [2, 5], "four": 2, "dv_x": 2, "dv_y": 2, "v_x": 2, "v_y": 2, "finiti": 2, "perform": [2, 6], "propag": 2, "a_": [2, 3], "g": [2, 4, 6], "constant": [2, 4, 6], "purpos": 2, "incorpor": 2, "These": 2, "rel": [2, 5, 7], "high": [2, 3, 6], "appropri": [2, 3], "rho": [2, 3], "c_": 2, "densiti": [2, 3], "ga": 2, "fluid": 2, "c_d": 2, "coeffici": [2, 6], "shape": [2, 5], "cross": 2, "area": [2, 3], "mass": [2, 5, 6, 7], "system": [2, 4], "upward": 2, "angl": [2, 4, 6], "theta": 2, "ccw": [2, 5], "axi": [2, 5], "co": [2, 4], "For": [2, 4, 5, 7], "simplifi": [2, 7], "vv_x": 2, "similarli": [2, 4], "vv_y": 2, "iterativ": 2, "account": 2, "sign": 2, "specif": [2, 4], "few": 2, "paramet": 2, "rho_": [2, 3], "28": 2, "kg": [2, 5, 6, 7], "47": 2, "sqrt": [2, 4, 6], "befor": [2, 6], "determin": [2, 5], "address": [2, 3], "embed": 2, "larger": 2, "respiratori": 2, "individu": 2, "15": 2, "mu": 2, "05": [2, 5], "ml": 2, "onlin": 2, "kda": 2, "kilo": 2, "dalton": 2, "pi": [2, 4, 5, 6], "found": [2, 4], "volum": [2, 6], "spheric": 2, "excel": 2, "sheet": 2, "height": [2, 6], "averag": 2, "adult": 2, "person": 2, "70": 2, "eject": 2, "horizont": [2, 6], "defin": [2, 5], "81": [2, 6], "rho_air": 2, "0e": 2, "rho_droplet": 2, "1000": [2, 3], "vx": 2, "vy": 2, "x_arr": 2, "y_arr": 2, "ay": [2, 3], "titl": 2, "axvlin": 2, "83": 2, "linestyl": [2, 4], "color": [2, 4], "k": [2, 3, 4], "dash": [2, 7], "drop": 2, "miss": 2, "resporatori": 2, "normal": 2, "0e3": 2, "66e": 2, "24": [2, 4, 5], "break": 2, "157710": 2, "47457780084": 2, "var": 2, "folder": 2, "74": 2, "jtxzz5d9637f574hh5cmbq240000gn": 2, "ipykernel_52908": [], "1728733566": 2, "py": 2, "62": 2, "userwarn": 2, "ident": [2, 6], "low": 2, "xlim": 2, "singular": 2, "automat": 2, "expand": [2, 4], "statement": 2, "code": 2, "remov": 2, "happen": 2, "ratio": [2, 6], "net": 2, "surpris": 2, "suitabl": 2, "fine": 2, "erron": 2, "wrong": 2, "influenc": 2, "current": 2, "suspend": 2, "hour": 2, "contain": 2, "thousand": 2, "viruss": 2, "meter": 2, "mask": 2, "prevent": [2, 3], "therefor": [2, 3], "sourc": 2, "migit": 2, "itself": 2, "additon": 2, "properli": 2, "tang": 2, "j": 2, "w": [2, 5, 6], "et": 2, "al": 2, "2013": 2, "airflow": 2, "dynam": [2, 5], "human": 2, "jet": 2, "potenti": [2, 3], "infecti": 2, "aerosol": 2, "plo": 2, "ONE": 2, "e59970": 2, "doi": 2, "10": [2, 3, 4, 6], "1371": 2, "journal": 2, "pone": 2, "0059970": 2, "chaudhuri": 2, "2020": 2, "role": [2, 5], "type": 2, "phy": 2, "32": [2, 4], "063309": 2, "1063": 2, "0015984": 2, "vansciv": 2, "2011": 2, "imag": [2, 7], "velocimetri": 2, "scienc": 2, "technolog": 2, "45": 2, "415": 2, "422": 2, "1080": 2, "02786826": 2, "2010": 2, "542785": 2, "han": 2, "z": [2, 5, 6], "character": 2, "distribut": 2, "exhal": 2, "soc": 2, "interfac": 2, "20130560": 2, "http": [2, 6], "org": [2, 6], "1098": 2, "rsif": 2, "0560": 2, "dhand": 2, "li": 2, "Their": 2, "viral": 2, "infect": 2, "respir": 2, "crit": 2, "care": 2, "med": 2, "vol": 2, "202": 2, "iss": 2, "pp": 2, "651": 2, "659": 2, "explos": 3, "cannon": 3, "shell": 3, "launch": 3, "small": [3, 4], "howitz": 3, "common": 3, "avalanch": 3, "danger": 3, "intention": 3, "trigger": 3, "prone": 3, "seriou": 3, "sure": 3, "hit": 3, "target": 3, "utah": 3, "dangeoru": 3, "live": 3, "shock": 3, "errant": 3, "bomb": 3, "rip": 3, "pleasant": 3, "grove": 3, "home": 3, "muzzl": 3, "drag": 3, "air": 3, "maximum": [3, 6], "altitud": 3, "One": [3, 6], "thing": 3, "atmospher": 3, "forc": [3, 6], "adiabat": 3, "alpha": [3, 6], "rho_0": 3, "sea": 3, "level": [3, 8], "3": [3, 6, 7], "laps": 3, "rate": 3, "temperatur": 3, "pick": 3, "modifi": [3, 6], "drag_0": 3, "origin": [3, 6, 7], "activ": 3, "heavili": 4, "field": 4, "topic": [4, 7], "typic": 4, "ii": 4, "advantag": 4, "treatment": 4, "easier": 4, "justifi": 4, "even": 4, "power": 4, "around": [4, 5, 6], "concis": 4, "infti": 4, "n": 4, "truncat": 4, "label": 4, "eq": 4, "neglect": 4, "greater": [4, 6, 7], "sai": [4, 5], "later": [4, 7], "method": 4, "linear": [4, 5, 6, 7], "master": 4, "repetit": 4, "three": 4, "recogn": 4, "sin": [4, 6], "polynoim": 4, "thu": [4, 6], "radian": [4, 6], "11": [4, 6], "circ": [4, 6], "sim10": 4, "round": 4, "nearest": 4, "satisfi": 4, "keep": 4, "cosin": 4, "lot": 4, "sine": 4, "easi": 4, "program": 4, "achiev": 4, "accuraci": 4, "64": 4, "benefici": 4, "conceptu": 4, "accumul": 4, "f0": 4, "ones": 4, "len": 4, "f2": 4, "f4": 4, "hline": 4, "dot": 4, "reflect": 4, "black": 4, "lowest": 4, "ok": 4, "pm": 4, "adequ": 4, "consist": 4, "shown": [4, 5, 7], "appear": 4, "almost": 4, "57": 4, "Not": 4, "shappi": 4, "green": 4, "graph": 4, "115": 4, "outstand": 4, "handi": 4, "hot": 4, "stuff": 4, "describ": 4, "e": 4, "incl": 4, "nx": 4, "enough": 4, "instead": [4, 5, 7], "formula": 4, "gamma": 4, "c": 4, "redefin": 4, "previous": 5, "solid": [5, 6, 7], "experienc": 5, "pure": 5, "rotat": [5, 6], "motion": [5, 6], "phase": 5, "detail": 5, "translat": 5, "modul": 5, "refesh": 5, "univers": [5, 6], "restrict": 5, "fix": [5, 6], "center": [5, 6, 7], "plai": 5, "By": 5, "definit": 5, "sens": 5, "segment": 5, "sometim": 5, "pivot": 5, "locat": [5, 7], "straight": 5, "25": [5, 6, 7], "hat": 5, "instant": [5, 7], "reset": 5, "def": 5, "cross_product": 5, "v1": 5, "v2": 5, "vector": [5, 7], "arrai": 5, "return": 5, "r_particl": 5, "part": [5, 6], "r_pivot": 5, "37": [5, 6], "circumst": 5, "ye": 5, "along": 5, "intern": 5, "descript": 5, "cm": [5, 6, 7], "parallel": 5, "addit": 5, "intrins": 5, "l_": 5, "s_z": 5, "i_": 5, "zz": 5, "omega_z": 5, "moment": [5, 6], "inertia": [5, 6], "resist": 5, "associ": 5, "convent": 5, "cw": 5, "_o": 5, "disk": [5, 7], "radiu": [5, 6, 7], "rad": [5, 6], "lsz": 5, "10000000000000002": 5, "extern": 5, "frame": [5, 6], "earth": 5, "sun": 5, "total": [5, 7], "orb": 5, "omega": [5, 7], "m_": 5, "tangenti": [5, 7], "analog": 5, "made": 5, "begin": 5, "quantum": 5, "mechan": 5, "electron": 5, "nucleu": 5, "motiong": 5, "m_e": 5, "972e24": 5, "r_e": 5, "371e6": 5, "60": 5, "ls": 5, "4724e11": 5, "365": 5, "perpendicular": [5, 7], "lo": 5, "051169042234388e": 5, "33": 5, "5795543223110204e": 5, "5795550274279246e": 5, "1": 6, "2": 6, "sphere": 6, "releas": 6, "rest": 6, "ramp": 6, "inclin": 6, "12": 6, "heigh": 6, "surfac": [6, 7], "angular": 6, "bottom": [6, 7], "revolut": 6, "did": 6, "sympi": 6, "sym": 6, "180": 6, "h": 6, "n2": 6, "fg": 6, "ff": 6, "symbol": 6, "static": [6, 7], "ffx": 6, "eq1": 6, "a_theta": 6, "tfz": 6, "eq2": 6, "constraint": 6, "neg": 6, "eq3": 6, "sol1": 6, "float": 6, "v0": 6, "w0": 6, "dtheta": 6, "rev": 6, "456866919230157": 6, "827467676920628": 6, "003570517957253": 6, "716901942948414": 6, "roll": [6, 7], "slip": 6, "multipl": 6, "mr": 6, "slightli": 6, "version": 6, "openstax": 6, "access": 6, "free": 6, "book": 6, "colleg": 6, "2e": 6, "page": 6, "cylind": 6, "except": 6, "frictionless": 6, "slide": 6, "frictionlessli": 6, "short": 6, "equal": 6, "explain": [6, 7], "bowl": 6, "ball": 6, "storag": 6, "top": [6, 7], "across": 6, "stop": 6, "20": 6, "cylindr": 6, "wheel": 6, "pull": 6, "kinet": 6, "mu_": 6, "mu_k": 6, "hollow": 6, "yo": 6, "thought": 6, "light": 6, "string": 6, "wrap": 6, "circumfer": 6, "held": 6, "space": 6, "fall": 6, "unwind": 6, "v_t": 7, "relat": 7, "se": 7, "despit": 7, "edg": 7, "shouldn": 7, "answer": 7, "aid": 7, "puzzl": 7, "There": 7, "video": 7, "sketch": 7, "undergo": 7, "middl": 7, "ani": 7, "radial": 7, "add": 7, "complic": 7, "pattern": 7, "contact": 7, "improv": 7, "drawn": 7, "2r": 7, "respons": 7, "orbit": 7, "momentum": 7, "sping": 7, "courc": 8, "ipykernel_53084": [], "ipykernel_53297": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"a1": [0, 1, 2, 3, 4], "2": [0, 1, 2, 3, 4, 5, 7], "numer": [0, 1, 2], "integr": 0, "finit": [0, 1], "differ": [0, 1], "method": [0, 1, 2], "1": [0, 1, 2, 3, 4, 5, 7], "motiv": [0, 4, 5, 7], "linear": 0, "3": [0, 1, 2, 4, 5], "taylor": [0, 4], "seri": [0, 4], "mathemat": 0, "trick": 0, "truncat": 0, "question": 0, "answer": 0, "4": [0, 2, 5], "first": 0, "order": 0, "forward": 0, "practic": 1, "suggest": 1, "solv": 1, "strategi": 1, "A": [1, 7, 8], "equat": [1, 2], "b": 1, "realist": [2, 3], "projectil": [2, 3], "motion": [2, 3, 7], "project": [2, 3], "covid": 2, "19": 2, "object": [2, 5], "background": 2, "physic": [2, 8], "molecul": 2, "methodolog": 2, "air": 2, "drag": 2, "compon": 2, "iter": 2, "auxiliari": 2, "valu": 2, "result": 2, "sneez": 2, "droplet": 2, "quick": 2, "observ": 2, "breath": 2, "5": [2, 3], "summari": 2, "6": 2, "refer": 2, "artilleri": 3, "problem": [3, 6], "expans": 4, "s": 4, "binomi": 4, "a2": [5, 6, 7], "angular": [5, 7], "momentum": 5, "revisit": 5, "point": 5, "particl": 5, "momemtum": 5, "rigid": 5, "spin": 5, "orbit": 5, "combin": [5, 7], "x": 6, "note": 7, "translat": 7, "rotat": 7, "speed": 7, "d6": 7, "superposit": 7, "veloc": 7, "pure": 7, "compet": 8, "approach": 8, "introductori": 8, "compendium": 8, "exam": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})