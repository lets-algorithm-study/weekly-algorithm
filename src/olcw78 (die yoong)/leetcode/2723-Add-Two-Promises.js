//  https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const n1 = await promise1;
    const n2 = await promise2;

    Promise.all([
      promise1,
      promise2
    ]).then(res => {
      const [n1, n2] = res
      const sum = n1 + n2
      
      return new Promise(resolve => 
        resolve(sum)
      )
    })
    
    return new Promise(resolve => resolve(n1 + n2))
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
