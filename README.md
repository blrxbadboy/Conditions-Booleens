# Conditions-Booleens


## Conditions & Booléens (JavaScript)

---

## Exigences de base

##  returnTrue

1. Écris une fonction appelée **`returnTrue`** qui ne prend aucun paramètre et retourne true lorsqu’elle est invoquée.

```javascript
function returnTrue() {
  // Écris ton code ici
}

returnTrue() -> true

```

---

##  returnFalse

2. Écris une fonction appelée  **`returnFalse`** qui ne prend aucun paramètre et retourne false lorsqu’elle est invoquée.

```javascript
function returnFalse() {
  // Écris ton code ici
}
returnFalse() -> false

```

---


##  isEven

3. Écris une fonction appelée **`isEven`** qui prend un nombre en paramètre et retourne true si le nombre est pair et false s’il est impair.

```javascript

function isEven(number) {
  // Écris ton code ici
}
isEven(2) -> true
isEven(3) -> false


```

---


##  isOdd
4. Écris une fonction appelée **`isOdd`** qui prend un nombre en paramètre et retourne true si le nombre est impair et false s’il est pair.

```javascript

function isOdd(number) {
  // Écris ton code ici
}
isOdd(3) -> true
isOdd(2) -> false

```

---



##  isGreaterThan10
5. Écris une fonction appelée **`isGreaterThan10`** qui prend un nombre en paramètre et retourne true si le nombre est strictement supérieur à 10 et false sinon.

```javascript

function isGreaterThan10(number) {
  // Écris ton code ici
}
isGreaterThan10(5) -> false
isGreaterThan10(10) -> false
isGreaterThan10(11) -> true


```

---


##  isLessThan30
6. Écris une fonction appelée **`isLessThan30`** qui prend un nombre en paramètre et retourne true si le nombre est strictement inférieur à 30 et false sinon.

```javascript

function isLessThan30(number) {
  // Écris ton code ici
}
isLessThan30(5) -> true
isLessThan30(30) -> false
isLessThan30(32) -> false

```

---


##  isEqualTo10
7. Écris une fonction appelée **`isEqualTo10`** qui prend un nombre en paramètre et retourne true si le nombre est égal à 10 et false sinon.

```javascript

function isEqualTo10(number) {
  // Écris ton code ici
}
isEqualTo10(1) -> false
isEqualTo10(10) -> true
isEqualTo10(15) -> false


```

---


##  isGreaterOrEqualTo15
8. Écris une fonction appelée **`isGreaterOrEqualTo15`** qui prend un nombre en paramètre et retourne true si le nombre est supérieur ou égal à 15 et false sinon.
```javascript

function isGreaterOrEqualTo15(number) {
  // Écris ton code ici
}
isGreaterOrEqualTo15(0) -> false
isGreaterOrEqualTo15(15) -> true
isGreaterOrEqualTo15(20) -> true

```

---


##  isLessOrEqualTo8
9. Écris une fonction appelée **`isLessOrEqualTo8`** qui prend un nombre en paramètre et retourne true si le nombre est inférieur ou égal à 8 et false sinon.
```javascript

function isLessOrEqualTo8(num1) {
  // Écris ton code ici
}
isLessOrEqualTo8(2) -> true
isLessOrEqualTo8(8) -> true
isLessOrEqualTo8(12) -> false

```

---

---

## Plus de pratique


##  isLessThan
1. Écris une fonction appelée **`isLessThan`** qui prend deux nombres en paramètres et retourne true si num1 est inférieur à num2 et false sinon.

```javascript

function isLessThan(num1, num2) {
  // Écris ton code ici
}
isLessThan(2, 3) -> true
isLessThan(3, 2) -> false
isLessThan(3, 3) -> false
```

---

##  isEqualTo
2. Écris une fonction appelée **`isEqualTo`** qui prend deux nombres en paramètres et retourne true s’ils sont égaux et false sinon.
```javascript

function isEqualTo(num1, num2) {
  // Écris ton code ici
}
isEqualTo(3, 3) -> true
isEqualTo(3, 2) -> false

```

---
##  isOldEnoughToDrive
3. Écris une fonction appelée **`isOldEnoughToDrive`** qui prend un âge en paramètre et retourne true si la personne est assez âgée pour conduire.
Remarque : En Jordanie, on peut obtenir le permis à 18 ans.
```javascript

function isOldEnoughToDrive(age) {
  // Écris ton code ici
}
isOldEnoughToDrive(12) -> false
isOldEnoughToDrive(18) -> true
isOldEnoughToDrive(20) -> true
```

---

##  isValidPassword
4. Écris une fonction appelée **`isValidPassword`** qui prend un mot de passe en paramètre et retourne true si sa longueur est supérieure ou égale à 8 caractères et false sinon. (Utilise .length)
```javascript

function isValidPassword(password) {
  // Écris ton code ici
}
isValidPassword("hello") -> false
isValidPassword("password") -> true
isValidPassword("strongPassword") -> true
```

---

##  longerString
5. Écris une fonction appelée **`longerString`** qui prend deux chaînes de caractères en paramètres et retourne la plus longue. Si elles ont la même longueur, retourne "both".
```javascript

function longerString(string1, string2) {
  // Écris ton code ici
}
longerString("cat", "kitty") -> "kitty"
longerString("Hello", "Hi") -> "Hello"
longerString("Hello", "World") -> "both"
```

---

##  opposite
6. Écris une fonction appelée **`opposite`** qui prend une valeur booléenne en paramètre et retourne son opposé.
```javascript

function opposite(boolean) {
  // Écris ton code ici
}
opposite(true) -> false
opposite(false) -> true
```

---
---

## Avancé


##  rectAreaGreaterThan50
1. Écris une fonction appelée **`rectAreaGreaterThan50`** qui prend la longueur et la largeur d’un rectangle et retourne true si son aire est supérieure ou égale à 50, sinon false.
```javascript

function rectAreaGreaterThan50(length, width) {
  // Écris ton code ici
}
rectAreaGreaterThan50(10, 6) -> true
rectAreaGreaterThan50(10, 5) -> true
rectAreaGreaterThan50(2, 3) -> false
```

---

##  budgetStatus


2. Écris une fonction appelée **`budgetStatus`** qui prend un nombre en paramètre et retourne une chaîne indiquant l’état du budget :
- supérieur à 250 -> "over budget"
- inférieur ou égal à 250 -> "under budget"
```javascript


function budgetStatus(number) {
  // Écris ton code ici
}
budgetStatus(260) -> "over budget"
budgetStatus(250) -> "under budget"
budgetStatus(240) -> "under budget"

```

---
