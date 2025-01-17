/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var XpathAsc = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,8],$V2=[1,9],$V3=[1,10],$V4=[1,23],$V5=[1,24],$V6=[1,25],$V7=[1,11],$V8=[1,12],$V9=[1,13],$Va=[1,14],$Vb=[1,15],$Vc=[1,16],$Vd=[1,17],$Ve=[1,18],$Vf=[1,19],$Vg=[1,20],$Vh=[1,21],$Vi=[1,22],$Vj=[5,10,11,12,13,14,16,17,22,23,24,25,26,27,28,29,30,31,32,33],$Vk=[14,16,17,22,23,24,25,26,27,28,29,30,31,32,33],$Vl=[5,10,11,12,13,14,16,17,20,22,23,24,25,26,27,28,29,30,31,32,33,38,40],$Vm=[2,18],$Vn=[1,45],$Vo=[1,67],$Vp=[1,57],$Vq=[1,60],$Vr=[1,68],$Vs=[1,58],$Vt=[1,61],$Vu=[1,62],$Vv=[1,63],$Vw=[1,64],$Vx=[1,65],$Vy=[1,66],$Vz=[20,38,40],$VA=[1,79],$VB=[1,78],$VC=[1,77],$VD=[1,80],$VE=[16,20,36,38,40,42,43,44,45,48,49,50],$VF=[1,93],$VG=[1,94],$VH=[20,36,38,40,42,43,44,45,48,49];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"SETS":4,"EOF":5,"SET":6,"SELECTOR":7,"EXPRESION":8,"AXES":9,"tk_slash":10,"tk_dobleslash":11,"tk_punto":12,"tk_doblepunto":13,"tk_identificador":14,"PREDICADO":15,"tk_asterisco":16,"tk_node":17,"tk_corchetea":18,"EXPRESION_FILTRO":19,"tk_corchetec":20,"EXPRESION_LOGICA":21,"tk_ancestorself":22,"tk_ancestor":23,"tk_child":24,"tk_descendantself":25,"tk_descendant":26,"tk_followingsibling":27,"tk_following":28,"tk_self":29,"tk_parent":30,"tk_precedingsibling":31,"tk_attribute":32,"tk_preceding":33,"ATRIBUTO":34,"tk_arroba":35,"tk_igual":36,"CADENA":37,"tk_and":38,"EXPRESION_RELACIONAL":39,"tk_or":40,"EXPRESION_NUMERICA":41,"tk_mayor":42,"tk_menor":43,"tk_mayorigual":44,"tk_menorigual":45,"EXPRESION_CADENA":46,"tk_arrobaasterisco":47,"tk_menos":48,"tk_mas":49,"tk_division":50,"tk_parentesisa":51,"expresion_numerica":52,"tk_parentesisc":53,"tk_entero":54,"tk_decimal":55,"tk_last":56,"tk_position":57,"tk_cadena1":58,"tk_cadena2":59,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",10:"tk_slash",11:"tk_dobleslash",12:"tk_punto",13:"tk_doblepunto",14:"tk_identificador",16:"tk_asterisco",17:"tk_node",18:"tk_corchetea",20:"tk_corchetec",22:"tk_ancestorself",23:"tk_ancestor",24:"tk_child",25:"tk_descendantself",26:"tk_descendant",27:"tk_followingsibling",28:"tk_following",29:"tk_self",30:"tk_parent",31:"tk_precedingsibling",32:"tk_attribute",33:"tk_preceding",35:"tk_arroba",36:"tk_igual",38:"tk_and",40:"tk_or",42:"tk_mayor",43:"tk_menor",44:"tk_mayorigual",45:"tk_menorigual",47:"tk_arrobaasterisco",48:"tk_menos",49:"tk_mas",50:"tk_division",51:"tk_parentesisa",52:"expresion_numerica",53:"tk_parentesisc",54:"tk_entero",55:"tk_decimal",56:"tk_last",57:"tk_position",58:"tk_cadena1",59:"tk_cadena2"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,3],[6,3],[6,3],[6,2],[6,3],[7,1],[7,1],[7,1],[7,1],[8,2],[8,2],[8,2],[15,3],[15,0],[19,1],[9,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,2],[34,4],[21,3],[21,3],[21,1],[39,3],[39,3],[39,3],[39,3],[39,3],[39,1],[39,1],[39,1],[39,1],[39,1],[39,1],[46,1],[46,1],[41,2],[41,3],[41,3],[41,3],[41,3],[41,3],[41,1],[41,1],[41,1],[41,1],[41,1],[37,1],[37,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
  this.$ = "TODO CORRECTO :D XPATH ASC VERSION";
                                return this.$; 
break;
case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 60: case 61:
 
break;
case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 58: case 59:
  
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:6,9:5,10:$V0,11:$V1,12:$V2,13:$V3,14:$V4,16:$V5,17:$V6,22:$V7,23:$V8,24:$V9,25:$Va,26:$Vb,27:$Vc,28:$Vd,29:$Ve,30:$Vf,31:$Vg,32:$Vh,33:$Vi},{1:[3]},{5:[1,26],6:27,7:4,8:6,9:5,10:$V0,11:$V1,12:$V2,13:$V3,14:$V4,16:$V5,17:$V6,22:$V7,23:$V8,24:$V9,25:$Va,26:$Vb,27:$Vc,28:$Vd,29:$Ve,30:$Vf,31:$Vg,32:$Vh,33:$Vi},o($Vj,[2,3]),{8:28,9:29,14:$V4,16:$V5,17:$V6,22:$V7,23:$V8,24:$V9,25:$Va,26:$Vb,27:$Vc,28:$Vd,29:$Ve,30:$Vf,31:$Vg,32:$Vh,33:$Vi},{7:30,10:$V0,11:$V1,12:$V2,13:$V3},{7:31,10:$V0,11:$V1,12:$V2,13:$V3},o($Vk,[2,10]),o($Vk,[2,11]),o($Vk,[2,12]),o($Vk,[2,13]),{8:32,14:$V4,16:$V5,17:$V6},{8:33,14:$V4,16:$V5,17:$V6},{8:34,14:$V4,16:$V5,17:$V6},{8:35,14:$V4,16:$V5,17:$V6},{8:36,14:$V4,16:$V5,17:$V6},{8:37,14:$V4,16:$V5,17:$V6},{8:38,14:$V4,16:$V5,17:$V6},{8:39,14:$V4,16:$V5,17:$V6},{8:40,14:$V4,16:$V5,17:$V6},{8:41,14:$V4,16:$V5,17:$V6},{8:42,14:$V4,16:$V5,17:$V6},{8:43,14:$V4,16:$V5,17:$V6},o($Vl,$Vm,{15:44,18:$Vn}),o($Vl,$Vm,{15:46,18:$Vn}),o($Vl,$Vm,{15:47,18:$Vn}),{1:[2,1]},o($Vj,[2,2]),o($Vj,[2,4]),o($Vj,[2,8]),{8:49,9:48,14:$V4,16:$V5,17:$V6,22:$V7,23:$V8,24:$V9,25:$Va,26:$Vb,27:$Vc,28:$Vd,29:$Ve,30:$Vf,31:$Vg,32:$Vh,33:$Vi},{8:50,9:51,14:$V4,16:$V5,17:$V6,22:$V7,23:$V8,24:$V9,25:$Va,26:$Vb,27:$Vc,28:$Vd,29:$Ve,30:$Vf,31:$Vg,32:$Vh,33:$Vi},o($Vl,[2,20]),o($Vl,[2,21]),o($Vl,[2,22]),o($Vl,[2,23]),o($Vl,[2,24]),o($Vl,[2,25]),o($Vl,[2,26]),o($Vl,[2,27]),o($Vl,[2,28]),o($Vl,[2,29]),o($Vl,[2,30]),o($Vl,[2,31]),o($Vl,[2,14]),{9:59,14:$Vo,16:$Vp,17:$Vq,19:52,21:53,22:$V7,23:$V8,24:$V9,25:$Va,26:$Vb,27:$Vc,28:$Vd,29:$Ve,30:$Vf,31:$Vg,32:$Vh,33:$Vi,34:56,35:$Vr,39:54,41:55,47:$Vs,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},o($Vl,[2,15]),o($Vl,[2,16]),o($Vj,[2,5]),o($Vj,[2,9]),o($Vj,[2,6]),o($Vj,[2,7]),{20:[1,69]},{20:[2,19],38:[1,70],40:[1,71]},o($Vz,[2,35]),o($Vz,[2,41],{16:$VA,36:[1,76],42:[1,72],43:[1,73],44:[1,74],45:[1,75],48:$VB,49:$VC,50:$VD}),o($Vz,[2,42]),o($Vz,[2,43]),o($Vz,[2,44]),o($Vz,[2,45]),o($Vz,[2,46]),{14:$Vo,41:81,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},{52:[1,82]},o($VE,[2,55]),o($VE,[2,56]),o($VE,[2,57]),o($VE,[2,58]),o($VE,[2,59]),{14:[1,83]},o($Vl,[2,17]),{9:59,14:$Vo,16:$Vp,17:$Vq,22:$V7,23:$V8,24:$V9,25:$Va,26:$Vb,27:$Vc,28:$Vd,29:$Ve,30:$Vf,31:$Vg,32:$Vh,33:$Vi,34:56,35:$Vr,39:84,41:55,47:$Vs,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},{9:59,14:$Vo,16:$Vp,17:$Vq,22:$V7,23:$V8,24:$V9,25:$Va,26:$Vb,27:$Vc,28:$Vd,29:$Ve,30:$Vf,31:$Vg,32:$Vh,33:$Vi,34:56,35:$Vr,39:85,41:55,47:$Vs,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},{14:$Vo,41:86,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},{14:$Vo,41:87,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},{14:$Vo,41:88,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},{14:$Vo,41:89,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},{14:$Vo,37:91,41:92,46:90,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$VF,59:$VG},{14:$Vo,41:95,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},{14:$Vo,41:96,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},{14:$Vo,41:97,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},{14:$Vo,41:98,48:$Vt,51:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy},o($VE,[2,49]),{53:[1,99]},{36:[1,100]},o($Vz,[2,33]),o($Vz,[2,34]),o($Vz,[2,36],{16:$VA,48:$VB,49:$VC,50:$VD}),o($Vz,[2,37],{16:$VA,48:$VB,49:$VC,50:$VD}),o($Vz,[2,38],{16:$VA,48:$VB,49:$VC,50:$VD}),o($Vz,[2,39],{16:$VA,48:$VB,49:$VC,50:$VD}),o($Vz,[2,40]),o($Vz,[2,47]),o($Vz,[2,48],{16:$VA,48:$VB,49:$VC,50:$VD}),o($Vz,[2,60]),o($Vz,[2,61]),o($VH,[2,50],{16:$VA,50:$VD}),o($VH,[2,51],{16:$VA,50:$VD}),o($VE,[2,52]),o($VE,[2,53]),o($VE,[2,54]),{37:101,58:$VF,59:$VG},o($Vz,[2,32])],
defaultActions: {26:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:this.begin('comment');
break;
case 1:this.popState();
break;
case 2:/* skip commentario content*/
break;
case 3: return 17;  
break;
case 4: return 56;  
break;
case 5: return 57;  
break;
case 6: return 22;  
break;
case 7: return 23;  
break;
case 8: return 32;  
break;
case 9: return 24;  
break;
case 10: return 25;  
break;
case 11: return 26;  
break;
case 12: return 27;  
break;
case 13: return 28;  
break;
case 14: return 30;  
break;
case 15: return 31;  
break;
case 16: return 33;  
break;
case 17: return 29;  
break;
case 18: return 50;  
break;
case 19: return 40;  
break;
case 20: return 38;  
break;
case 21: return 'tk_mod';  
break;
case 22: return 47;  
break;
case 23: return 35;  
break;
case 24: return 'tk_barra';  
break;
case 25: return 49;  
break;
case 26: return 48;  
break;
case 27: return 16;  
break;
case 28: return 'tk_noigual'; 
break;
case 29: return 45; 
break;
case 30: return 44; 
break;
case 31: return 36; 
break;
case 32: return 42; 
break;
case 33: return 43; 
break;
case 34: return 'tk_interrogacion'; 
break;
case 35: return 13; 
break;
case 36: return 12; 
break;
case 37: return 11; 
break;
case 38: return 10; 
break;
case 39: return 55;  
break;
case 40: return 54;  
break;
case 41: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 58; 
break;
case 42: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 59; 
break;
case 43: return 14; 
break;
case 44: return 'tk_squote'; 
break;
case 45: return 'tk_dquote'; 
break;
case 46: return 18; 
break;
case 47: return 20; 
break;
case 48: return 'tk_llavea'; 
break;
case 49: return 'tk_llavec'; 
break;
case 50: return 51; 
break;
case 51: return 53; 
break;
case 52:/* skip whitespace */
break;
case 53: /*Los Ignoramos*/   
break;
case 54: return 5;       
break;
case 55: 
break;
}
},
rules: [/^(?:<!--)/i,/^(?:-->)/i,/^(?:.)/i,/^(?:node\(\))/i,/^(?:last\(\))/i,/^(?:position\(\))/i,/^(?:ancestor-or-self::)/i,/^(?:ancestor::)/i,/^(?:attribute::)/i,/^(?:child::)/i,/^(?:descendant-or-self::)/i,/^(?:descendant::)/i,/^(?:following-sibling::)/i,/^(?:following::)/i,/^(?:parent::)/i,/^(?:preceding-sibling::)/i,/^(?:preceding::)/i,/^(?:self::)/i,/^(?:div\b)/i,/^(?:or\b)/i,/^(?:and\b)/i,/^(?:mod\b)/i,/^(?:@\*)/i,/^(?:@)/i,/^(?:\|)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:!=)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:=)/i,/^(?:>)/i,/^(?:<)/i,/^(?:\?)/i,/^(?:\.\.)/i,/^(?:\.)/i,/^(?:\/\/)/i,/^(?:\/)/i,/^(?:([0-9]+["."][0-9]+)\b)/i,/^(?:[0-9]+\b)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']*')/i,/^(?:([a-zA-ZáéíúóàèìòÁÉÍÓÚÀÈÌÒÙñÑ])[a-zA-Z0-9áéíúóàèìòÁÉÍÓÚÀÈÌÒÙñÑ_]*)/i,/^(?:['])/i,/^(?:["])/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\s+)/i,/^(?:[ \t\r\n\f])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"comment":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],"inclusive":true},"INITIAL":{"rules":[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = XpathAsc;
exports.Parser = XpathAsc.Parser;
exports.parse = function () { return XpathAsc.parse.apply(XpathAsc, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}