/** 2667. Create Hellow World Function
 * Problem: https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Editorial: https://leetcode.com/problems/create-hello-world-function/editorial/?source=submission-ac
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */