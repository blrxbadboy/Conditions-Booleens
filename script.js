//ex 1 

function returnTrue() {
    return true
}
returnTrue()

//ex 2
function returnfalse() {
    return false
    
}

//ex 3
function isRven(n1) {
    if ( n1 % 2 === 0 ) {
        return true
        
    }
    return false
    
}
isRven(2)
isRven(3)

//ex 4
function isOdd(n) {
    if ( n % 2 === 0 ) {
        return false
        
    }
    return true
    
}

//ex 5
function isGreaterThan10(n) {
    if (n>10) {
        return true
    }
    return false
}
isGreaterThan10(5)
isGreaterThan10(10)
isGreaterThan10(11)

//ex 6

function isLessThan30(n) {
    if (n < 30) {
        return true
    }
    return false
}
isLessThan30(5)
isLessThan30(30)
isLessThan30(32)

//ex 7

function isEqualTo10(n) {
    if (n === 10) {
        return true
        
    }
    return false
}
isEqualTo10(1)
isEqualTo10(10)
isEqualTo10(15)

//ex 8

function isGreaterOrEqualTo15(n) {
    if (n >= 15) {
        return true
        
    }
    return false
}
isGreaterOrEqualTo15(0)
isGreaterOrEqualTo15(15)
isGreaterOrEqualTo15(20)

//ex 9
 function isLessOrEqualTo8(n) {
    if (n <= 8) {
        return true
        
    }
    return false
 }
 isLessOrEqualTo8(2)
 isLessOrEqualTo8(8)
 isLessOrEqualTo8(12)

 //ex 10

 function isLessThan(n1,n2) {
    if (n1>n2) {
        return true
        
    }
    return false
 }
 isLessThan(2,3)
 isLessThan(3,2)
 isLessThan(3,3)

 //ex 11

 function isEqualTo(n1,n2) {
    if (n1===n2) {
        return true
        
    }
    return false
 }
 isEqualTo(3,3)
 isEqualTo(3,2)

 //ex 12
 function isOldEnoughToDrive(age) {
    if (age>=18) {
        return true
        
    }
    return false
 }
 //ex 13
 function isValidPassword(ch) {
    if (ch.length >= 8) {
        return true
        
    }
    return false
 }
 isValidPassword("hello")
 isValidPassword("password")
 isValidPassword("strongPassword")

 //ex 14

 function longerString(ch1,ch2) {
    if (ch1.length > ch2.length) {
        return ch1
    } else { if (ch1.length === ch2.length) {
        return ch2
        
    }
        
    }
    return "both"
 }
 longerString("cat","kitty")
 longerString("hello","hi")
 longerString("hello","woeld")

 //ex 15
 function opposite(bool) {
    if (bool === "true") {
        return false
        
    } else{
        if (bool=== "false") {
            return true
            
        }
    }
    
    
 }
opposite("true")
opposite("false")

//ex 16

function rectAreaGreaterThan50(l, w) {
area = l * w
if (area >= 50) {
    return true
  } else {
    return false
  }
}


rectAreaGreaterThan50(10, 6)
rectAreaGreaterThan50(10, 5)
rectAreaGreaterThan50(2, 3)

//ex 17

function budgetStatus(n) {
    if (n>250) {
        return "over budget"
        
    }
    return "under budget"
}