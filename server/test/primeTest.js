import 'babel-polyfill'
import assert from 'assert';  
import chai from 'chai'
import {isPrimeNumber} from '../controllers/prime'//require('../Prime').isPrime;  
  
describe('isPrimeNumber', function()  
{  console.log("Hello");
  it('isPrimeNumber should return data for prime date. Else it should return Date is not prime', function()   
  {  
      assert.equal(false, isPrimeNumber());  
      assert.equal(true, isPrimeNumber());  
  });  
});