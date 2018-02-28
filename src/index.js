module.exports = function check(str, bracketsConfig) {
  // your solution
var arr=[];
arr=str.split("");

if (arr.length%2!==0) {
return false;
}

var stack = [];
for (var i=0; i<arr.length; i++) {
	for (var j=0; j<bracketsConfig.length; j++) {
		if (arr[i]==bracketsConfig[j][0]) {
		stack.push(arr[i]);
		} if (arr[i]==bracketsConfig[j][1]&&stack[stack.length-1]==bracketsConfig[j][0]) {
		stack.pop();
		}
	}
}

if (stack.length === 0) {
return true;
} else return false;

}