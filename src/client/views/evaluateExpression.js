var EvaluateString = (function () {
    function EvaluateString() {
    }
    function Stack()
	{
		 this.stac=new Array();
		 this.pop=function(){
		  return this.stac.pop();
		 }
		 this.push=function(item){
		  this.stac.push(item);
		 }
		 this.peek=function(){
		  return this.stac[this.stac.length-1];
		 }
		 this.empty=function(){
		  return this.stac.length === 0;
		 }
		 this.print=function(){
		 	for (var i = 0; i < this.stac.length; i++) {
		 		console.log(this.stac[i]);
		 	}
		 }
	}

	function StringBuffer() {
	    this.__strings__ = new Array;
	}

	StringBuffer.prototype.append = function (str) {
	    this.__strings__.push(str);
	};

	StringBuffer.prototype.toString = function () {
	    return this.__strings__.join("");
	};

    EvaluateString.evaluate = function (expression) {
        var tokens = (expression).split('');
        var values = (new Stack());
        var ops = (new Stack());
        for (var i = 0; i < tokens.length; ) {
            if (tokens[i] === ' ')
                continue;
            if ((tokens[i]).charCodeAt(0) >= ('0').charCodeAt(0) && (tokens[i]).charCodeAt(0) <= ('9').charCodeAt(0)) {
                var sbuf = new StringBuffer();
                while ((i < tokens.length && (tokens[i]).charCodeAt(0) >= ('0').charCodeAt(0) && (tokens[i]).charCodeAt(0) <= ('9').charCodeAt(0)))
                    sbuf.append(tokens[i++]);
                values.push(parseInt(sbuf.toString()));
            }
            else if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
                while ((!ops.empty() && EvaluateString.checkPrecedence(tokens[i], ops.peek()))) {
					             values.push(EvaluateString.applyOp(ops.pop(), values.pop(), values.pop()));
                }
                ops.push(tokens[i++]);
            }
        }
        while (!ops.empty()) {
			       values.push(EvaluateString.applyOp(ops.pop(), values.pop(), values.pop()));
        }
        return values.pop();
    };
    EvaluateString.checkPrecedence = function (op1, op2) {
        if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-'))
            return false;
        else
            return true;
    };
    EvaluateString.applyOp = function (op, b, a) {
        switch ((op)) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0)
                    console.error("Divide by Zero");
                return (a / b);
        }
        return 0;
    };
    return EvaluateString;
}());

export default EvaluateString;
//EvaluateString["__class"] = "EvaluateString";
//EvaluateString.main(null);
