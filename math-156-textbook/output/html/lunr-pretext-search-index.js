var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "decimal-octal",
  "level": "1",
  "url": "decimal-octal.html",
  "type": "Section",
  "number": "1.1",
  "title": "Decimal and Octal",
  "body": " Decimal and Octal   Review of the Decimal System  Before we look at the numbering systems commonly used by computers, it will likely be helpful to review the workings of the decimal system, the numbering system commonly used by humans. decimal system  base 10 The decimal system (base 10) is based on ten digits, starting from zero, and uses a positional notation, so called because the magnitude of the number depends not only on what digits are used, but also where each digit is located within the number.  For example, if we start counting from zero upwards, we get Notice that in base ten, we don't have a single digit to denote the number ten. Instead, we write a zero in the right column and then write a one in the column to the left. Similarly, when we continue counting up to twenty, once we have written the number nineteen as 19, the next number sets the right digit to zero while incrementing the left column by one to give the number 20 (twenty).  This means that for the decimal number 179, the digit 9 is in the \"ones\" place, the digit 7 is in the \"tens\" place, and the digit 1 is in the \"hundreds\" place, so we can write or recalling that .    In the decimal number 386, state which digit is in the  ones place  tens place  hundreds place        6, since it is the right-most digit  8  3        In the decimal number 24680, in what place are the following digits?  8  6  0  2  4        the tens place  the hundreds place  the ones place  the ten thousands place  the thousands place        Bases Other Than Ten - How They work  To put a number into a base other than ten, we use the same ideas as before: base other than 10   the number of digits available is equal to the base  there is no single digit which represents the base, so in order to write the base in that system, set the right column to zero and increment the column to the left by one    The best way to understand this is to work through an example, so let us first look at numbers written in base 4. base 4 This base is not commonly used in computing, but it is a useful example nonetheless. We will use the same ideas as before:  there are four digits in total: 0,1,2,3  there is no single digit which represents the base, so when we want to write the number four , set the right column to zero and increment the column to the left by one    To make it clear which base we are using, any numbers written in a base other than ten will have the base as a subscript. So the number three in base 4 is .  Let's contrast counting using base 10 versus base 4 by counting from one to twenty in both bases side-by-side. base subscript notation Notice that the default base is 10, so numbers in the decimal system are written without a subscript, but numbers in base 4 have the base as a subscript.     base 10  base 4                                                                                      base 10  base 4                                                                                     Another thing to note is what happens when we try to write the decimal number 16 in base 4. The previous number, 15, is written as . When you add one to , the three in the right-hand column increments to four. The base is four, however, and so we write a zero instead and add one to the next column to the left. Since the digit is that column is also a three, we write a zero and write a one in the next column to the left. This yields .   So, looking at the number 14 in decimal, we can think of it as but that same number written in base 4 is The two numerical representations are equivalent since is 14.   Earlier, we expanded 179 as We can expand numbers in base 4 in the same way, using powers of the base 4 instead of powers of 10. conversion from base 4 to decimal For example, we can show that as follows:   Similarly, and we can conclude that     The number can be expanded in base 10 as   Expand the following numbers into base 10 in a similar fashion. Then perform that calculation to express the number in base 10 (also called decimal form ).                                    Octal  Let us now look at numbers written in base 8, called octal . base 8 octal Octal is a base commonly used in computing. We will use the same ideas as before:  there are eight digits in total: 0, 1, 2, 3, 4, 5, 6, 7.  when we want to write the number \"eight\" in a column, set that column to zero and increment the column to the left by one.  to make it clear which base we are using, any numbers written in a base other than ten will have the base as a subscript.  So the number eight Note that unless explicitly stated otherwise, any number is to be interpreted as being in base ten. is written in base eight as . The only place the digit 8 can appear in a number expressed in base eight is in the subscript indicating the base!  Let's contrast counting in base 10 versus base 8 by counting from one to twenty in both bases side-by-side.     base 10  base 8                                                                                      base 10  base 8                                                                                     Consider the number 14. We can think of it as but that same number written in octal is and since is 14, you can see that the two numerical representations are equivalent.  Earlier, we expanded 179 as We can expand in octal in the same way, using powers of 8 instead of powers of 10: conversion from octal to decimal  So we see that 179 is equivalent to .    In the number , state which digit is in the  ones place  eights place  sixty-fours place   place        4  2  7  1        The number can be expanded in base 8 as . Expand the following numbers into base 8 in a similar fashion. Then perform the resulting calculation to find the expression of each in decimal form.                                      Use the technique of the previous example to write the following numbers in expanded form and then express them in base ten.                                       Exercise involves the following table.   base 10  base 2  base 3  base 4  base 5  base 6  base 7  base 8                                                                                                                                                                                                                                                                                                                                                                                                           For the following, complete the specified column in this table. The fourth column has been started as an example.    base 2   base 3   base 4   base 5   base 6   base 7   base 8       base 10  base 2  base 3  base 4  base 5  base 6  base 7  base 8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                In the number , in what place are the following digits?    8 ones   6 hundreds   5 thousands   7 tens   2 millions   1 ten millions     In the number , which digit is in the    ones place? 7   eights place? 6   sixty-fours place? 5   place? 2     Write the following numbers in expanded form:                               Convert the following numbers to base 10.                              Solutions to Exercises   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "decimal-octal.html#example-1",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  In the decimal number 386, state which digit is in the  ones place  tens place  hundreds place        6, since it is the right-most digit  8  3     "
},
{
  "id": "example-2",
  "level": "2",
  "url": "decimal-octal.html#example-2",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  In the decimal number 24680, in what place are the following digits?  8  6  0  2  4        the tens place  the hundreds place  the ones place  the ten thousands place  the thousands place     "
},
{
  "id": "example-3",
  "level": "2",
  "url": "decimal-octal.html#example-3",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  The number can be expanded in base 10 as   Expand the following numbers into base 10 in a similar fashion. Then perform that calculation to express the number in base 10 (also called decimal form ).                                 "
},
{
  "id": "p-18",
  "level": "2",
  "url": "decimal-octal.html#p-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "octal "
},
{
  "id": "example-4",
  "level": "2",
  "url": "decimal-octal.html#example-4",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  In the number , state which digit is in the  ones place  eights place  sixty-fours place   place        4  2  7  1     "
},
{
  "id": "example-5",
  "level": "2",
  "url": "decimal-octal.html#example-5",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "  The number can be expanded in base 8 as . Expand the following numbers into base 8 in a similar fashion. Then perform the resulting calculation to find the expression of each in decimal form.                                   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "decimal-octal.html#example-6",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  Use the technique of the previous example to write the following numbers in expanded form and then express them in base ten.                                   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "decimal-octal.html#exercise-1",
  "type": "Exercise",
  "number": "1.1.4.1",
  "title": "",
  "body": " Exercise involves the following table.   base 10  base 2  base 3  base 4  base 5  base 6  base 7  base 8                                                                                                                                                                                                                                                                                                                                                                                                           For the following, complete the specified column in this table. The fourth column has been started as an example.    base 2   base 3   base 4   base 5   base 6   base 7   base 8       base 10  base 2  base 3  base 4  base 5  base 6  base 7  base 8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "decimal-octal.html#exercise-2",
  "type": "Exercise",
  "number": "1.1.4.2",
  "title": "",
  "body": " 8 ones "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "decimal-octal.html#exercise-3",
  "type": "Exercise",
  "number": "1.1.4.3",
  "title": "",
  "body": " 6 hundreds "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "decimal-octal.html#exercise-4",
  "type": "Exercise",
  "number": "1.1.4.4",
  "title": "",
  "body": " 5 thousands "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "decimal-octal.html#exercise-5",
  "type": "Exercise",
  "number": "1.1.4.5",
  "title": "",
  "body": " 7 tens "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "decimal-octal.html#exercise-6",
  "type": "Exercise",
  "number": "1.1.4.6",
  "title": "",
  "body": " 2 millions "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "decimal-octal.html#exercise-7",
  "type": "Exercise",
  "number": "1.1.4.7",
  "title": "",
  "body": " 1 ten millions "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "decimal-octal.html#exercise-8",
  "type": "Exercise",
  "number": "1.1.4.8",
  "title": "",
  "body": " ones place? 7 "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "decimal-octal.html#exercise-9",
  "type": "Exercise",
  "number": "1.1.4.9",
  "title": "",
  "body": " eights place? 6 "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "decimal-octal.html#exercise-10",
  "type": "Exercise",
  "number": "1.1.4.10",
  "title": "",
  "body": " sixty-fours place? 5 "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "decimal-octal.html#exercise-11",
  "type": "Exercise",
  "number": "1.1.4.11",
  "title": "",
  "body": " place? 2 "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "decimal-octal.html#exercise-12",
  "type": "Exercise",
  "number": "1.1.4.12",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "decimal-octal.html#exercise-13",
  "type": "Exercise",
  "number": "1.1.4.13",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "decimal-octal.html#exercise-14",
  "type": "Exercise",
  "number": "1.1.4.14",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "decimal-octal.html#exercise-15",
  "type": "Exercise",
  "number": "1.1.4.15",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "decimal-octal.html#exercise-16",
  "type": "Exercise",
  "number": "1.1.4.16",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "decimal-octal.html#exercise-17",
  "type": "Exercise",
  "number": "1.1.4.17",
  "title": "",
  "body": "        "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "decimal-octal.html#exercise-19",
  "type": "Exercise",
  "number": "1.1.4.19",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "decimal-octal.html#exercise-20",
  "type": "Exercise",
  "number": "1.1.4.20",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "decimal-octal.html#exercise-21",
  "type": "Exercise",
  "number": "1.1.4.21",
  "title": "",
  "body": "    "
},
{
  "id": "binary-hex",
  "level": "1",
  "url": "binary-hex.html",
  "type": "Section",
  "number": "1.2",
  "title": "Binary and Hexadecimal",
  "body": " Binary and Hexadecimal   Binary  Let us now look at base 2, called binary : base 2  binary   there are two digits in total: 0 and 1  counting up from 1 in a column involves setting that column digit to 0 and incrementing the column to the left by 1    Let's compare counting using base 10 and base 2 by counting from one to twenty in both bases side by side:    base 10  base 2                                                                                      base 10  base 2                                                                                      Writing a binary number in expanded form uses powers of 2 instead of powers of 10. We can determine the equivalent decimal form of a binary number by first writing it in expanded form, just as with other bases. Let's look at the binary number : and so the binary number is 6 in base 10. conversion from binary to decimal Similarly, the number is equivalent to 20:   You can see that binary numbers quickly become difficult to read. So, while computers use only zeros and ones, we generally write numbers in a computing context in bases that are powers of two, like octal and hexadecimal (base 16). We will see in how to quickly convert back and forth between binary, octal, and hexadecimal.    In the following binary numbers, in what place is the underlined number?                     the ones place   the twos place   the eights place (the place)   the thirty-twos place (the place)        Convert the following numbers to base 10.                                Hexadecimal  Another base commonly used in computing is base 16, called hexadecimal . hexadecimal  base 16 We will use the same ideas as before:  there are sixteen digits in total  when we want to count up from 15 in a column, we set the digit in that column to zero and increment the column to the left by 1    The problem we have is that we run out of numerical digits when counting in hexadecimal. We could invent new symbols, but instead we will borrow from the alphabet. The numbers 0 to 15 are written in hexadecimal as: The next, corresponding to decimal 16, is .  Let's count up to twenty in hexadecimal:    base 10  base 16                                                                                      base 10  base 16                                                                                      Let's consider the expanded form of to see its equivalence to : conversion from hexadecimal to decimal     In the number , in what place are the following digits?   1   D   F   5        the s place   the sixteens place   the ones place   the s place       Write the following numbers in expanded form. When doing so, replace any letters with their base 10 equivalents. For example, the expanded form of is .                                  Convert the following numbers to base 10:                         In the following binary numbers, in what place is the underlined number?     the twos place    the ones place    the 64s place ( )    the 256s place ( )    the sixteens ( ) place     Write the following numbers in expanded form, and then use that form to express the number in base 10.                          Convert the following numbers to base 10:                     In the number , identify the place value of the following digits:     ones    sixteens    the s position    the s position    the s position    the s position     Write the following hexadecimal numbers in expanded form.                               Convert the following numbers to base 10.                                    Solutions to Exercises   "
},
{
  "id": "p-34",
  "level": "2",
  "url": "binary-hex.html#p-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary "
},
{
  "id": "example-7",
  "level": "2",
  "url": "binary-hex.html#example-7",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": "  In the following binary numbers, in what place is the underlined number?                     the ones place   the twos place   the eights place (the place)   the thirty-twos place (the place)     "
},
{
  "id": "example-8",
  "level": "2",
  "url": "binary-hex.html#example-8",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Convert the following numbers to base 10.                             "
},
{
  "id": "p-42",
  "level": "2",
  "url": "binary-hex.html#p-42",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hexadecimal "
},
{
  "id": "example-9",
  "level": "2",
  "url": "binary-hex.html#example-9",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": " In the number , in what place are the following digits?   1   D   F   5        the s place   the sixteens place   the ones place   the s place     "
},
{
  "id": "example-10",
  "level": "2",
  "url": "binary-hex.html#example-10",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": " Write the following numbers in expanded form. When doing so, replace any letters with their base 10 equivalents. For example, the expanded form of is .                                "
},
{
  "id": "example-11",
  "level": "2",
  "url": "binary-hex.html#example-11",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": " Convert the following numbers to base 10:                    "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "binary-hex.html#exercise-22",
  "type": "Exercise",
  "number": "1.2.3.1",
  "title": "",
  "body": "  the twos place "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "binary-hex.html#exercise-23",
  "type": "Exercise",
  "number": "1.2.3.2",
  "title": "",
  "body": "  the ones place "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "binary-hex.html#exercise-24",
  "type": "Exercise",
  "number": "1.2.3.3",
  "title": "",
  "body": "  the 64s place ( ) "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "binary-hex.html#exercise-25",
  "type": "Exercise",
  "number": "1.2.3.4",
  "title": "",
  "body": "  the 256s place ( ) "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "binary-hex.html#exercise-26",
  "type": "Exercise",
  "number": "1.2.3.5",
  "title": "",
  "body": "  the sixteens ( ) place "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "binary-hex.html#exercise-27",
  "type": "Exercise",
  "number": "1.2.3.6",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "binary-hex.html#exercise-28",
  "type": "Exercise",
  "number": "1.2.3.7",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "binary-hex.html#exercise-29",
  "type": "Exercise",
  "number": "1.2.3.8",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "binary-hex.html#exercise-30",
  "type": "Exercise",
  "number": "1.2.3.9",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "binary-hex.html#exercise-31",
  "type": "Exercise",
  "number": "1.2.3.10",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "binary-hex.html#exercise-32",
  "type": "Exercise",
  "number": "1.2.3.11",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "binary-hex.html#exercise-33",
  "type": "Exercise",
  "number": "1.2.3.12",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "binary-hex.html#exercise-34",
  "type": "Exercise",
  "number": "1.2.3.13",
  "title": "",
  "body": "  ones "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "binary-hex.html#exercise-35",
  "type": "Exercise",
  "number": "1.2.3.14",
  "title": "",
  "body": "  sixteens "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "binary-hex.html#exercise-36",
  "type": "Exercise",
  "number": "1.2.3.15",
  "title": "",
  "body": "  the s position "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "binary-hex.html#exercise-37",
  "type": "Exercise",
  "number": "1.2.3.16",
  "title": "",
  "body": "  the s position "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "binary-hex.html#exercise-38",
  "type": "Exercise",
  "number": "1.2.3.17",
  "title": "",
  "body": "  the s position "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "binary-hex.html#exercise-39",
  "type": "Exercise",
  "number": "1.2.3.18",
  "title": "",
  "body": "  the s position "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "binary-hex.html#exercise-40",
  "type": "Exercise",
  "number": "1.2.3.19",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "binary-hex.html#exercise-41",
  "type": "Exercise",
  "number": "1.2.3.20",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "binary-hex.html#exercise-42",
  "type": "Exercise",
  "number": "1.2.3.21",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "binary-hex.html#exercise-43",
  "type": "Exercise",
  "number": "1.2.3.22",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "binary-hex.html#exercise-44",
  "type": "Exercise",
  "number": "1.2.3.23",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "binary-hex.html#exercise-45",
  "type": "Exercise",
  "number": "1.2.3.24",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "binary-hex.html#exercise-46",
  "type": "Exercise",
  "number": "1.2.3.25",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "binary-hex.html#exercise-47",
  "type": "Exercise",
  "number": "1.2.3.26",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "binary-hex.html#exercise-48",
  "type": "Exercise",
  "number": "1.2.3.27",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "binary-hex.html#exercise-49",
  "type": "Exercise",
  "number": "1.2.3.28",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "binary-hex.html#exercise-50",
  "type": "Exercise",
  "number": "1.2.3.29",
  "title": "",
  "body": "    "
},
{
  "id": "non-integer-to-decimal",
  "level": "1",
  "url": "non-integer-to-decimal.html",
  "type": "Section",
  "number": "1.3",
  "title": "Converting Non-Integer Numbers to Decimal",
  "body": " Converting Non-Integer Numbers to Decimal   Review of the Decimal System for Non-integers  Let's once again review the decimal system, but this time we will consider non-integer numbers. Recall that integers are numbers that can be written without a fractional part, like 5, -3, and 0. To write non-integer numbers as a decimal, we again use positional notation, where the fractional part is to the right of the decimal point.  For example, consider the base-10 number The dot is called the decimal point (some cultures use a comma rather than a dot). The digit to the immediate left (8) is in the ones place, the first digit to the right (7) is in the tenths place, and the second digit to the right (6) is in the hundredths place:   Recall that can be written as , we can write or, equivalently, This may seem redundant, but this representation will come in handy when considering bases other than ten.   In the decimal number 38.6, state which digit is in the   tens place   ones place   tenths place       3   8, since it is to the left of the decimal point   6      In the decimal number 2.4608, in what place are the following digits?   6   2   0   8   4       the hundredths place   the ones place   the thousandths place   the ten thousandths place   the tenths place       Non-Integers in Bases Other Than Ten  When we consider a number such as we immediately run into a naming problem. We can no longer call the dot the decimal point as this is not a decimal number. For this particular example, we can call the dot the binary point , and in general the dot is called the radix point .  Now, the digits to the left of the binary point make up the integer part of the number as before, and the digits to the right make up the fractional part.  Let's look at a number in base 4, so we're not getting confused with all the zeros and ones. If we consider we see that the two digits to the left of the radix point, 2 and 0, make up the integer part , while the 3 and the 1 make up the fractional part . Using positional notation, the 3 is in the fourths place while the 1 is in the sixteenths place. we have seen before that , so now or, if you prefer,   Writing these numbers in their decimal equivalents, we see that   Similarly, and we can conlude that    In the number state which digit is in the   sixteens place   sixteenths place       3   1      Write the following numbers in expanded form, and then use the expanded form to determine the decimal form of the number. If appropriate, round your answer to three decimal places.                                    In the number , in what place are the following digits?   3  ones   6  thousandths   5  hundredths   7  ten thousandths   2  tens   1  hundreds    In the number , which digit is in the   ones place?  4   eighths place?  5   eights place?  3   sixty-fourths place?  6   sixty-fours place?  2    Convert the following numbers to base 10. When appropriate, round to three decimal places.                              Solutions to Exercises   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "non-integer-to-decimal.html#example-12",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": " In the decimal number 38.6, state which digit is in the   tens place   ones place   tenths place       3   8, since it is to the left of the decimal point   6    "
},
{
  "id": "example-13",
  "level": "2",
  "url": "non-integer-to-decimal.html#example-13",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": " In the decimal number 2.4608, in what place are the following digits?   6   2   0   8   4       the hundredths place   the ones place   the thousandths place   the ten thousandths place   the tenths place    "
},
{
  "id": "p-56",
  "level": "2",
  "url": "non-integer-to-decimal.html#p-56",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decimal point binary point radix point "
},
{
  "id": "p-58",
  "level": "2",
  "url": "non-integer-to-decimal.html#p-58",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integer part fractional part "
},
{
  "id": "example-14",
  "level": "2",
  "url": "non-integer-to-decimal.html#example-14",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": " In the number state which digit is in the   sixteens place   sixteenths place       3   1    "
},
{
  "id": "example-15",
  "level": "2",
  "url": "non-integer-to-decimal.html#example-15",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": " Write the following numbers in expanded form, and then use the expanded form to determine the decimal form of the number. If appropriate, round your answer to three decimal places.                                "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-51",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "",
  "body": " 3  ones "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-52",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "",
  "body": " 6  thousandths "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-53",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "",
  "body": " 5  hundredths "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-54",
  "type": "Exercise",
  "number": "1.3.3.4",
  "title": "",
  "body": " 7  ten thousandths "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-55",
  "type": "Exercise",
  "number": "1.3.3.5",
  "title": "",
  "body": " 2  tens "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-56",
  "type": "Exercise",
  "number": "1.3.3.6",
  "title": "",
  "body": " 1  hundreds "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-57",
  "type": "Exercise",
  "number": "1.3.3.7",
  "title": "",
  "body": " ones place?  4 "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-58",
  "type": "Exercise",
  "number": "1.3.3.8",
  "title": "",
  "body": " eighths place?  5 "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-59",
  "type": "Exercise",
  "number": "1.3.3.9",
  "title": "",
  "body": " eights place?  3 "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-60",
  "type": "Exercise",
  "number": "1.3.3.10",
  "title": "",
  "body": " sixty-fourths place?  6 "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-61",
  "type": "Exercise",
  "number": "1.3.3.11",
  "title": "",
  "body": " sixty-fours place?  2 "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-62",
  "type": "Exercise",
  "number": "1.3.3.12",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-63",
  "type": "Exercise",
  "number": "1.3.3.13",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-64",
  "type": "Exercise",
  "number": "1.3.3.14",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-65",
  "type": "Exercise",
  "number": "1.3.3.15",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "non-integer-to-decimal.html#exercise-66",
  "type": "Exercise",
  "number": "1.3.3.16",
  "title": "",
  "body": "    "
},
{
  "id": "converting-from-decimal",
  "level": "1",
  "url": "converting-from-decimal.html",
  "type": "Section",
  "number": "1.4",
  "title": "Converting from Decimal",
  "body": " Converting from Decimal  As we've seen, converting from a different base back to decimal form can be done by expansion: but how do we go back the other way? In order to do that, we first need to look as some modular arithmetic .   Modular Arithmetic: Finding Quotient and Remainder  Suppose we wish to divide one integer by another. If the second integer doesn't divide into the first evenly, the result is a real number which we can report either in fraction or decimal form. For example, if we divide 13 by 5, we get although the second last expression is usually written as , with the symbol suppressed.  If, for some reason, we wish to stay in the land of integers, we could report the result by saying that 13 divided by 5 equals 2, with 3 left over. In this example, the 2 is called the quotient and the 3 is called the remainder , and we can write this calculation in the following form: quotient  remainder    This sort of calculation is very helpful when doing unit conversions. The metric system has reduced the need for this type of calculation, but since we are still stuck with practical units that are not multiples of 10 (time given in days, hours, and minutes, for example), doing this type of conversion is still necessary. For example, if we know that a certain length of time is 54 hours long and we would prefer to give it in terms of days and hours, then so 54 hours 2 days plus 6 hours.  But how can we find quotients and remainders with a standard calculator? If we take the number 54 and divide it by 24, our calculator will tell us 2.25. There are two ways to go:  Take the integer part of 2.25, which is 2. Then perform the following calculation:   Alternatively, you can take the decimal part of 2.25, which is 0.25, and multiply it by the divisor, 24:      Find the quotient and remainder for the following:                                   Using Quotient and Remainder to Convert from Decimal Form  Now that we know how to find quotients and remainders, let's look at some examples that convert from a decimal number into octal. Consider the number . We earlier found that . Let's now go back the other way, using repeated division and remainders.   conversion from decimal to octal   Convert the decimal number 206 to octal.  The procedure is to divide 206 by the base, which in this case is 8, and write down the quotient and the remainder. Then divide the quotient by the base and write down the new quotient and remainder. As you can see below, we first divide 206 by 8 to get a quotient of 25 with remainder 6. If we then divide 25 by 8, we get a quotient of 3 with remainder 1. we continue doing this until we get a quotient of zero, as in the table below.    quotient  remainder       25  6       3  1       0  3     Taken in reverse order, the remainders comprise the digits of the equivalent octal number .    Let's do some more examples using this same procedure.   conversion from decimal to binary  Convert the decimal number 41 to binary.      quotient  remainder       20  1       10  0       5  0       2  1       1  0       0  1   Reading the remainders from bottom to top gives     conversion from decimal to hexadecimal  Convert the decimal number 24362 to hexadecimal.      quotient  remainder (base 10)  remainder (base 16)       1522  10  A       95  2  2       5  15  F       0  5  5   So      Converting Non-integer Numbers from Decimal Form  We have just seen that to convert an integer number from decimal form, we divide by the base repeatedly. To convert the fractional part of a non-integer decimal number to another base, we instead will multiply the base repeatedly.    Convert the decimal number 0.59375 to octal.  The procedure is to multiply the decimal number by the base, and split the result into the integer part and the fractional (decimal) part. Then take the fractional part and write it on the next line. Mulitply it by the base (8 in this example) and split as before. Stop when the fractional part goes to zero. Finally, write down the integer parts from top to bottom after the radix point and affix the subscript to indicate the base.     integer  fractional                         Reading the integer parts from top to bottom gives .     Convert the decimal number 0.625 to binary.       integer  fractional                                    We have .    Convert the decimal number 0.6328125 to hexadecimal.       integer  fractional                         Reading the integer parts from top to bottom gives    Let's do an example with a twist.   Convert the decimal number 0.3 to octal.       integer  fractional                                                           You'll notice that we have a bit of a problem: if we put the fractional\/decimal part 0.4 on the next line, then we'll have a repeat of the second line, and then the next three lines will also repeat, and so on. What this means is that is a repeating decimal in octal: .    Finally, what if we are converting a non-integer number that has both an integer part and a fractional part? The answer is to do the two parts separately and then put them together.   Convert the number 17.375 to binary.   First, we'll do the integer part and convert to binary.     quotient  remainder                                                          So   Now, convert to binary.     integer  fractional                                    So   Putting it all together, we get that        Convert the following decimal numbers to octal.                        Convert the following decimal numbers to binary.                        Convert the following decimal numbers to hexadecimal.                        Convert the decimal number 27 to the following bases.   binary     octal     hexadecimal     base 7      Convert the following decimal numbers to octal.                        Convert the following decimal numbers to binary.                        Convert the following decimal numbers to hexadecimal.                        Convert the decimal number 1234 to the following bases.   binary     octal     hexadecimal     base 7      Perform the following conversions for non-integer numbers. Give exact answers (do not round off).   to octal     to binary     to hexadecimal     to octal     to binary  is the simplest, but other equivalent expressions are and , etc.   to hexadecimal     to octal       Solutions to Exercises   "
},
{
  "id": "p-62",
  "level": "2",
  "url": "converting-from-decimal.html#p-62",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quotient remainder "
},
{
  "id": "example-16",
  "level": "2",
  "url": "converting-from-decimal.html#example-16",
  "type": "Example",
  "number": "1.4.1",
  "title": "",
  "body": " Find the quotient and remainder for the following:                                "
},
{
  "id": "example-17",
  "level": "2",
  "url": "converting-from-decimal.html#example-17",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": " conversion from decimal to octal   Convert the decimal number 206 to octal.  The procedure is to divide 206 by the base, which in this case is 8, and write down the quotient and the remainder. Then divide the quotient by the base and write down the new quotient and remainder. As you can see below, we first divide 206 by 8 to get a quotient of 25 with remainder 6. If we then divide 25 by 8, we get a quotient of 3 with remainder 1. we continue doing this until we get a quotient of zero, as in the table below.    quotient  remainder       25  6       3  1       0  3     Taken in reverse order, the remainders comprise the digits of the equivalent octal number .   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "converting-from-decimal.html#example-18",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": " conversion from decimal to binary  Convert the decimal number 41 to binary.      quotient  remainder       20  1       10  0       5  0       2  1       1  0       0  1   Reading the remainders from bottom to top gives   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "converting-from-decimal.html#example-19",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": " conversion from decimal to hexadecimal  Convert the decimal number 24362 to hexadecimal.      quotient  remainder (base 10)  remainder (base 16)       1522  10  A       95  2  2       5  15  F       0  5  5   So   "
},
{
  "id": "example-20",
  "level": "2",
  "url": "converting-from-decimal.html#example-20",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Convert the decimal number 0.59375 to octal.  The procedure is to multiply the decimal number by the base, and split the result into the integer part and the fractional (decimal) part. Then take the fractional part and write it on the next line. Mulitply it by the base (8 in this example) and split as before. Stop when the fractional part goes to zero. Finally, write down the integer parts from top to bottom after the radix point and affix the subscript to indicate the base.     integer  fractional                         Reading the integer parts from top to bottom gives .   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "converting-from-decimal.html#example-21",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": " Convert the decimal number 0.625 to binary.       integer  fractional                                    We have .  "
},
{
  "id": "example-22",
  "level": "2",
  "url": "converting-from-decimal.html#example-22",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": " Convert the decimal number 0.6328125 to hexadecimal.       integer  fractional                         Reading the integer parts from top to bottom gives   "
},
{
  "id": "example-23",
  "level": "2",
  "url": "converting-from-decimal.html#example-23",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": " Convert the decimal number 0.3 to octal.       integer  fractional                                                           You'll notice that we have a bit of a problem: if we put the fractional\/decimal part 0.4 on the next line, then we'll have a repeat of the second line, and then the next three lines will also repeat, and so on. What this means is that is a repeating decimal in octal: .   "
},
{
  "id": "example-24",
  "level": "2",
  "url": "converting-from-decimal.html#example-24",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": " Convert the number 17.375 to binary.   First, we'll do the integer part and convert to binary.     quotient  remainder                                                          So   Now, convert to binary.     integer  fractional                                    So   Putting it all together, we get that    "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-67",
  "type": "Exercise",
  "number": "1.4.4.1",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-68",
  "type": "Exercise",
  "number": "1.4.4.2",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-69",
  "type": "Exercise",
  "number": "1.4.4.3",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-70",
  "type": "Exercise",
  "number": "1.4.4.4",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-71",
  "type": "Exercise",
  "number": "1.4.4.5",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-72",
  "type": "Exercise",
  "number": "1.4.4.6",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-73",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-73",
  "type": "Exercise",
  "number": "1.4.4.7",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-74",
  "type": "Exercise",
  "number": "1.4.4.8",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-75",
  "type": "Exercise",
  "number": "1.4.4.9",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-76",
  "type": "Exercise",
  "number": "1.4.4.10",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-77",
  "type": "Exercise",
  "number": "1.4.4.11",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-78",
  "type": "Exercise",
  "number": "1.4.4.12",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-79",
  "type": "Exercise",
  "number": "1.4.4.13",
  "title": "",
  "body": " binary   "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-80",
  "type": "Exercise",
  "number": "1.4.4.14",
  "title": "",
  "body": " octal   "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-81",
  "type": "Exercise",
  "number": "1.4.4.15",
  "title": "",
  "body": " hexadecimal   "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-82",
  "type": "Exercise",
  "number": "1.4.4.16",
  "title": "",
  "body": " base 7   "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-83",
  "type": "Exercise",
  "number": "1.4.4.17",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-84",
  "type": "Exercise",
  "number": "1.4.4.18",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-85",
  "type": "Exercise",
  "number": "1.4.4.19",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-86",
  "type": "Exercise",
  "number": "1.4.4.20",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-87",
  "type": "Exercise",
  "number": "1.4.4.21",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-88",
  "type": "Exercise",
  "number": "1.4.4.22",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-89",
  "type": "Exercise",
  "number": "1.4.4.23",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-90",
  "type": "Exercise",
  "number": "1.4.4.24",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-91",
  "type": "Exercise",
  "number": "1.4.4.25",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-92",
  "type": "Exercise",
  "number": "1.4.4.26",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-93",
  "type": "Exercise",
  "number": "1.4.4.27",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-94",
  "type": "Exercise",
  "number": "1.4.4.28",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-95",
  "type": "Exercise",
  "number": "1.4.4.29",
  "title": "",
  "body": " binary   "
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-96",
  "type": "Exercise",
  "number": "1.4.4.30",
  "title": "",
  "body": " octal   "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-97",
  "type": "Exercise",
  "number": "1.4.4.31",
  "title": "",
  "body": " hexadecimal   "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-98",
  "type": "Exercise",
  "number": "1.4.4.32",
  "title": "",
  "body": " base 7   "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-99",
  "type": "Exercise",
  "number": "1.4.4.33",
  "title": "",
  "body": " to octal   "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-100",
  "type": "Exercise",
  "number": "1.4.4.34",
  "title": "",
  "body": " to binary   "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-101",
  "type": "Exercise",
  "number": "1.4.4.35",
  "title": "",
  "body": " to hexadecimal   "
},
{
  "id": "exercise-102",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-102",
  "type": "Exercise",
  "number": "1.4.4.36",
  "title": "",
  "body": " to octal   "
},
{
  "id": "exercise-103",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-103",
  "type": "Exercise",
  "number": "1.4.4.37",
  "title": "",
  "body": " to binary  is the simplest, but other equivalent expressions are and , etc. "
},
{
  "id": "exercise-104",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-104",
  "type": "Exercise",
  "number": "1.4.4.38",
  "title": "",
  "body": " to hexadecimal   "
},
{
  "id": "exercise-105",
  "level": "2",
  "url": "converting-from-decimal.html#exercise-105",
  "type": "Exercise",
  "number": "1.4.4.39",
  "title": "",
  "body": " to octal   "
},
{
  "id": "convert-bin-oct-hex",
  "level": "1",
  "url": "convert-bin-oct-hex.html",
  "type": "Section",
  "number": "1.5",
  "title": "Converting between Binary, Octal, and Hexadecimal",
  "body": " Converting between Binary, Octal, and Hexadecimal   Converting Between Binary and Octal  Let's first count from zero to 7 in both octal and binary.   octal  binary                                                                     If we add leading zeros where necessary to bring all binary numbers to three digits, we can see that The reason we are doing this is that if we look at a number expressed both in octal and binary, such as , we can see an interesting pattern. If the binary number is split into groups of three digits, starting from the right-hand-side , then we can see that each group of three digits is equal to the corresponding octal number in that place.  Let's use this observation to convert from octal to binary. conversion from octal to binary   Convert the following octal numbers to binary:             For each digit in the octal number, write the corresponding three-digit binary number (includeing any leading zeros as necessary). Then put the groups of three all together and, optionally, drop any leading zeros.          We can use a similar technique to convert from binary to octal. conversion from binary to octal   Convert the following binary numbers to octal.          First, group the binary digits into threes, starting from the right-hand side. The last group might need leading zeros to be added to make a group of three. Then rewrite each set of three into the corresponding digit in octal.              Converting Between Binary and Hexadecimal  As before, let's first count from zero to fifteen in both hexadecimal and binary.     hexadecimal  binary                                                                      hexadecimal  binary                                                                     If we add leading zeros where necessary to write all binary numbers with four digits, we can see that, for example, Now consider the number . To convert this to binary, write each hexadecimal digit in 4-digit binary (padding with leading zeros as necessary, as shown above) from left to right:   Let's work through more examples.   Convert the following hexadecimal numbers to binary. conversion from hexadecimal to binary                       conversion from binary to hexadecimal  Convert the following binary numbers to hexadecimal.          First, group the binary digits into sets of four, starting from the right-hand side . Then rewrite each set of four into the corresponding hexadecimal digit.         Padding the left-most group of four with leading zeros is done for clarity, rather than for necessity. You can skip that part of the process and instead write, for example,       Converting Between Octal and Hexadecimal  The fastest way to do this is to convert into binary first, then regroup the binary digits.   conversion from octal to hexadecimal  Convert the following octal numbers to hexadecimal.                      conversion from hexadecimal to octal  Convert the following hexadecimal numbers to octal.                       Converting Non-integer Numbers  Converting non-integer numbers between binary, octal, and hexadecimal works in the way you'd expect.   Convert the following octal numbers to binary.             For each digit in the octal number, write the corresponding three-digit binary number (with leading zeros if necessary). Then put the groups of three all together and, optionally, drop any leading zeros to the left of the radix point and any trailing zeros to the right of the radix point.           Convert the following binary numbers to octal:           First, group the binary digits into threes, starting from the radix point, adding extra leading and\/or trailing zeros as appropriate. Then rewrite each set of three as the corresponding octal digit.             conversion from hexadecimal to binary  Convert the following hexadecimal numbers to binary.                     We use the same techniques as before to convert non-integer numbers between octal and hexadecimal: convert to binary as an intermediate step.   conversion from hexadecimal to octal  Convert the following hexadecimal numbers to octal.                        Convert the following octal numbers to binary:                                  Convert the following hexadecimal numbers to binary.                                  Convert the following binary numbers to octal.                                  Convert the following binary numbers to hexadecimal.                                  Convert the following octal numbers to hexadecimal:                                  Convert the following hexadecimal numbers to octal.                                  Perform the following conversions for non-integer numbers.   to binary.     to binary     to hexadecimal     to octal     to octal     to hexadecimal       Solutions to Exercises   "
},
{
  "id": "example-25",
  "level": "2",
  "url": "convert-bin-oct-hex.html#example-25",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": " Convert the following octal numbers to binary:             For each digit in the octal number, write the corresponding three-digit binary number (includeing any leading zeros as necessary). Then put the groups of three all together and, optionally, drop any leading zeros.        "
},
{
  "id": "example-26",
  "level": "2",
  "url": "convert-bin-oct-hex.html#example-26",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": " Convert the following binary numbers to octal.          First, group the binary digits into threes, starting from the right-hand side. The last group might need leading zeros to be added to make a group of three. Then rewrite each set of three into the corresponding digit in octal.          "
},
{
  "id": "example-27",
  "level": "2",
  "url": "convert-bin-oct-hex.html#example-27",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": " Convert the following hexadecimal numbers to binary. conversion from hexadecimal to binary                     "
},
{
  "id": "example-28",
  "level": "2",
  "url": "convert-bin-oct-hex.html#example-28",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": " conversion from binary to hexadecimal  Convert the following binary numbers to hexadecimal.          First, group the binary digits into sets of four, starting from the right-hand side . Then rewrite each set of four into the corresponding hexadecimal digit.         Padding the left-most group of four with leading zeros is done for clarity, rather than for necessity. You can skip that part of the process and instead write, for example,    "
},
{
  "id": "example-29",
  "level": "2",
  "url": "convert-bin-oct-hex.html#example-29",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": " conversion from octal to hexadecimal  Convert the following octal numbers to hexadecimal.                    "
},
{
  "id": "example-30",
  "level": "2",
  "url": "convert-bin-oct-hex.html#example-30",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": " conversion from hexadecimal to octal  Convert the following hexadecimal numbers to octal.                    "
},
{
  "id": "example-31",
  "level": "2",
  "url": "convert-bin-oct-hex.html#example-31",
  "type": "Example",
  "number": "1.5.7",
  "title": "",
  "body": " Convert the following octal numbers to binary.             For each digit in the octal number, write the corresponding three-digit binary number (with leading zeros if necessary). Then put the groups of three all together and, optionally, drop any leading zeros to the left of the radix point and any trailing zeros to the right of the radix point.         "
},
{
  "id": "example-32",
  "level": "2",
  "url": "convert-bin-oct-hex.html#example-32",
  "type": "Example",
  "number": "1.5.8",
  "title": "",
  "body": " Convert the following binary numbers to octal:           First, group the binary digits into threes, starting from the radix point, adding extra leading and\/or trailing zeros as appropriate. Then rewrite each set of three as the corresponding octal digit.           "
},
{
  "id": "example-33",
  "level": "2",
  "url": "convert-bin-oct-hex.html#example-33",
  "type": "Example",
  "number": "1.5.9",
  "title": "",
  "body": " conversion from hexadecimal to binary  Convert the following hexadecimal numbers to binary.                    "
},
{
  "id": "example-34",
  "level": "2",
  "url": "convert-bin-oct-hex.html#example-34",
  "type": "Example",
  "number": "1.5.10",
  "title": "",
  "body": " conversion from hexadecimal to octal  Convert the following hexadecimal numbers to octal.                    "
},
{
  "id": "exercise-106",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-106",
  "type": "Exercise",
  "number": "1.5.5.1",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-107",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-107",
  "type": "Exercise",
  "number": "1.5.5.2",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-108",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-108",
  "type": "Exercise",
  "number": "1.5.5.3",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-109",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-109",
  "type": "Exercise",
  "number": "1.5.5.4",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-110",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-110",
  "type": "Exercise",
  "number": "1.5.5.5",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-111",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-111",
  "type": "Exercise",
  "number": "1.5.5.6",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-112",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-112",
  "type": "Exercise",
  "number": "1.5.5.7",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-113",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-113",
  "type": "Exercise",
  "number": "1.5.5.8",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-114",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-114",
  "type": "Exercise",
  "number": "1.5.5.9",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-115",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-115",
  "type": "Exercise",
  "number": "1.5.5.10",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-116",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-116",
  "type": "Exercise",
  "number": "1.5.5.11",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-117",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-117",
  "type": "Exercise",
  "number": "1.5.5.12",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-118",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-118",
  "type": "Exercise",
  "number": "1.5.5.13",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-119",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-119",
  "type": "Exercise",
  "number": "1.5.5.14",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-120",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-120",
  "type": "Exercise",
  "number": "1.5.5.15",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-121",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-121",
  "type": "Exercise",
  "number": "1.5.5.16",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-122",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-122",
  "type": "Exercise",
  "number": "1.5.5.17",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-123",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-123",
  "type": "Exercise",
  "number": "1.5.5.18",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-124",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-124",
  "type": "Exercise",
  "number": "1.5.5.19",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-125",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-125",
  "type": "Exercise",
  "number": "1.5.5.20",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-126",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-126",
  "type": "Exercise",
  "number": "1.5.5.21",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-127",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-127",
  "type": "Exercise",
  "number": "1.5.5.22",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-128",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-128",
  "type": "Exercise",
  "number": "1.5.5.23",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-129",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-129",
  "type": "Exercise",
  "number": "1.5.5.24",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-130",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-130",
  "type": "Exercise",
  "number": "1.5.5.25",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-131",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-131",
  "type": "Exercise",
  "number": "1.5.5.26",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-132",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-132",
  "type": "Exercise",
  "number": "1.5.5.27",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-133",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-133",
  "type": "Exercise",
  "number": "1.5.5.28",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-134",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-134",
  "type": "Exercise",
  "number": "1.5.5.29",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-135",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-135",
  "type": "Exercise",
  "number": "1.5.5.30",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-136",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-136",
  "type": "Exercise",
  "number": "1.5.5.31",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-137",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-137",
  "type": "Exercise",
  "number": "1.5.5.32",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-138",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-138",
  "type": "Exercise",
  "number": "1.5.5.33",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-139",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-139",
  "type": "Exercise",
  "number": "1.5.5.34",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-140",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-140",
  "type": "Exercise",
  "number": "1.5.5.35",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-141",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-141",
  "type": "Exercise",
  "number": "1.5.5.36",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-142",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-142",
  "type": "Exercise",
  "number": "1.5.5.37",
  "title": "",
  "body": " to binary.   "
},
{
  "id": "exercise-143",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-143",
  "type": "Exercise",
  "number": "1.5.5.38",
  "title": "",
  "body": " to binary   "
},
{
  "id": "exercise-144",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-144",
  "type": "Exercise",
  "number": "1.5.5.39",
  "title": "",
  "body": " to hexadecimal   "
},
{
  "id": "exercise-145",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-145",
  "type": "Exercise",
  "number": "1.5.5.40",
  "title": "",
  "body": " to octal   "
},
{
  "id": "exercise-146",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-146",
  "type": "Exercise",
  "number": "1.5.5.41",
  "title": "",
  "body": " to octal   "
},
{
  "id": "exercise-147",
  "level": "2",
  "url": "convert-bin-oct-hex.html#exercise-147",
  "type": "Exercise",
  "number": "1.5.5.42",
  "title": "",
  "body": " to hexadecimal   "
},
{
  "id": "sec-intro-to-logic",
  "level": "1",
  "url": "sec-intro-to-logic.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Logic",
  "body": " Introduction to Logic   Propositions  In logic, a proposition is a statement that is either true or false but both. proposition  logical proposition The statement must also be unambiguous.  Examples of statements that are propositions:  Trevor Noah is the host of the Daily Show on the Comedy Network.  Lego Star Wars is a video game.  The number is exactly equal to 3.  A proposition can be clearly false, as in the last statement.  Examples of statements that are not propositions:  Will you do your homework tonight?  Please pass the butter.  She was late for class this morning.  The first is not a proposition because questions cannot be propositions. (The answer to the question very well may be a proposition.) The second one is a command and cannot be said to be either true or false. The third of these examples is not a proposition because, taking the statement on its own, the truth value depends on who she is. If, however, that statement were expanded to become, \"My roommate's name is Laura and she was late for class this morning,\" then she is clearly defined to be Laura and the whole sentence is a proposition.  Taking this idea one step further, we can consider she in the third example to behave like a variable, and whether the full statement \"she was late\" is true or false must depend on what the value of the variable she is. Similarly, in programming it is very common to evaluate the value (true or false) of propositions like or in statements like if x=3 then print ''Hello World'' provided that, like she\/Laura, the value of has been defined previously.  Writing propositions in sentences is unwieldy, so we use variables to denote propositions. In symbolic logic it is conventional to use the letters etc., for propositions. Each of these variables can then have one of two values: true or false. For example, let Lego Star Wars is a video game and The number is exactly equal to 3. In this instance, the proposition is true, since there is a video game called Lego Star Wars. The proposition is false, since is the irrational number , whose decimal representation neither repeats nor terminates.    Operators   Negation  The negation of any proposition is called not p and is written using the tilde symbol, . negation  not  negative The tilde can be found on a standard keyboard as the shifted key to the left of the 1. You may also see negations in logic written using this symbol, , or using a bar or overline, . In computing, you will also see as the negation. We will use the because it uses a character on a conventional keyboard, so it is easier to type.  Note that you should be a little careful when negating sentences. For example, the negation of Pat is happy is not  Pat is unhappy. There are many other emotions that Pat could have (anger, fear, boredom, etc.). If the first statement is false, then its negationv must be true, so between the two you need to cover all possible situations that could arise. It would be safe to say that the negation of Pat is happy is Pat is not happy , though.  Another situation requiring care involves statements such as All the students have coding experience. The negation of this statement is not  None of the students have coding experience. The original statement is false even if only one of the students has no coding experience. So the negation of All the students have coding experience is At least one of the students does not have coding experience. Another way to write the negation is Some of the students don't have coding experience.    Are these two sentences negations of each other?  \"The number of students in Math 156 is even.\"  \"The number of students in Math 156 is odd.\"  Answer: Yes, these two are negations of each other. Since we never have fractions of students in class, the number of students must be either zero or a natural number (that is, a whole number). Since whole numbers and natural numbers are either even or odd, all possible situations are accounted by these two sentences. (Zero is an even number.)    Are these two sentences negations of each other?  \"Pat's Visa account balance is positive.\"  \"Pat's Visa account balance is negative.\"  Answer: No, these two statements are not negations of each other. There is a third possible case, \"Pat's Visa account balance is zero.\" Zero is an unsigned number, so the two statements don't account for all possible situations regarding Pat's Visa account balance. zero as unsigned number If the second statement was \"Pat's Visa account balance is negative or zero,\" then the second statement would be the negation of the first one (and vice versa).      Combining Propositions Using Connectives  Propositions may be combined using logical operators called connectives , and the result is called a compound proposition . There are three basic connectives that we will study: and , or , and exclusive or . (Oddly, the not operator is also called a connective, even though it acts on only one statement rather than combining two.)   Conjunction  If we connect the propositions and with and , then the result is called the conjunction of and . and  conjunction The conjunction of and is true provided both  and are true. Otherwise it is false. Symbolically, we write    Under what conditions is the statement \"Jason does his marking and goes to a movie\" true?  Answer: \"Jason does his marking and goes to a movie\" is true provided that Jason does his marking and also goes to a movie. If he does one or the other but not both , then the statement \"Jason does his marking and goes to a movie\" is false. It is also false if Jason does neither action.     Inclusive Disjunction  If we connect propositions and with or , then the result is called the inclusive disjunction of and . or inclusive  inclusive or  disjunction inclusive  inclusive disjunction The inclusive disjunction is true if at least one of and is true. It is false only if both and are false. Symbolically, we write    Under what conditions is the statement Jason does his marking or goes to a movie true?  Answer: Jason does his marking or goes to a movie is true provided at least one of the statements Jason does his marking or Jason goes to a movie is true. If Jason does his marking, then the compound sentence is true regardless of whether Jason goes to a movie or not. Similarly, if Jason goes to a movie, then the compound sentence is true whether Jason does his marking or not. In complete detail, the inclusive disjunction is true if any of the following are true:  Jason does his marking and also goes to a movie.  Jason does his marking but does not go to a movie.  Jason goes to a movie but does not do his marking.  The only case in which \"Jason does his marking or goes to a movie\" is false is if Jason neither goes to a movie nor does his marking.     Exclusive Disjunction  If we connect the propositions and with exclusive or (often written XOR ) then the result is called the exclusive disjunction of and . or exclusive  exclusive or  disjunction exclusive  exclusive disjunction  XOR Symbolically, we write The exclusive disjunction is true provided exactly one of the statements is true.    Or vs. XOR  In ordinary language, the word or can mean either the inclusive or or the exclusive or , or vs. XOR  XOR vs. or and it is usually up to the reader or listener to decide which one is appropriate from the context.    Which or is meant in the following sentences or phrases?  Would you like milk or sugar in your tea?  Wanted dead or alive.    Answer:  The answer could be \"milk\", \"sugar\", \"both\", or \"neither\". Since \"both\" is an option, the inclusive or is intended.  The person who is wanted in one of these two states will either be dead or alive but not both, so exclusive or is the best interpretation.      To unambiguously state which or is meant in everyday language, the word or can be replaced by slightly wordier constructions. The sentence \"Would you like milk or sugar or both in your tea?\" makes it clear that the inclusive or is meant. Replacing or with and\/or has the same result. Using the phrase \"but not both\" is a signal that the exclusive or is meant.  In general, if a statement is ambiguous, it is best to seek clarification. If that is not possible, then assuming that or means inclusive or is generally the safest. For the rest of this course, we will use or to mean the inclusive or .   Under what conditions is the statement \"Jason does his marking or goes to a movie but not both\" true?  \"Jason does his marking or goes to a movie but not both\" is true provided exactly one of the two conditions is true. If he does his marking, then he cannot also go to a movie or else the exclusive disjunction is false. If he goes to a movie, then he cannot also do his marking or the statement is false. Truth of the statement means he doesn't do both, and he doesn't do neither.     Logical Connectives and Precedence  When you are doing arithmetic, to evaluate the expression you need to know which operation (addition, multiplication, exponentiation) should come first. In the same way, there is an order of operations, or precedence , in logic:  negation, , is done first  and, , is done next  or, , is done last  and brackets () override the default precedence. If you like, you can think of not like exponents, and like multiplication, and or like addition (more on this later).  To evaluate the proposition , you would evaluate first, and then form the inclusive disjunction with (informally \"'or it' with \"). So is the same as . The precedence of the connectives makes the brackets redundant, but when you are starting out it might be helpful to include them.  To evaluate the proposition , you'd negate first, and then form the conjunction with . You could write , but the brackets are redundant. If you want the conjunction to occur before the negation, then you must write . It is very important that you recognize that is not equivalent to .      State whether the following sentences are propositions.  On September 6, 2006, mathematicians proved that is a prime number. Yes   Will you marry me? No.   Python is her favourite computing language. No   What is your favourite computing language? No   Please bring me a textbook. No.   The University of Victoria is located in Alberta. Yes.    Let be \"Rich is seven feet tall\" and be \"Susan has brown hair.\" Translate the following sentences into logical notation.   Rich is seven feet tall or he is seven feet tall.  Symbolically, this silly statement is .   Either Rich is not seven feet tall or Susan does not have brown hair. From the context, you could go with either or    It is not true that Rich is seven feet tall or Susan has brown hair.  The particular phrasing in this sentence indicates that care is being taken to avoid interpreting this as \"Rich is not seven feet tall or Susan has brown hair.\" That statement would be represented as (or, more redundantly, ).  Given the way the sentence is written, we should interpret it as . Later, when you study De Morgan's rules, you will learn a way to write in English that avoids any chance of misinterpretation.    Rich is seven feet tall and Susan has brown hair.     Either Rich is seven feet tall or Susan does not have brown hair, but not both.      Decide if the inclusive or exclusive disjunction is meant in the following sentences.   I will sit inside or outside. exclusive - you cannot sit inside and outside simultaneously.   During their movie marathon, my friends watched the Harry Potter movies or the Transformer movies. It is conceivable that they watched both series, so the inclusive disjunction should be assumed.   I will get an A or a B in the course. exclusive - only one grade is assigned to a course.   My answer is correct or incorrect. exclusive - your answer cannot be both correct and incorrect.   We need someone who speaks French or German. inclusive - a person who speaks both would be a good fit, too!    Let be \"The moon is made of green cheese\" and be \"The earth is made of green cheese.\" Translate the following English sentences into logical notation.   Either the moon is made of green cheese or both the moon and the earth are made of green cheese.     The earth is made of green cheese and either the earth or the moon is made of green cheese. The disjunction in this statement is the inclusive disjunction, since both could conceivably be made of green cheese. Therefore, the translation is    Either the earth is made of green cheese while the moon is not, or the moon is made of green cheese. The word while can be replaced with and without changing the meaning of the statement. The translation is . The exclusive disjunction is also acceptable, since the two \"disjunctives\" cannot both be true, but the answer given above is consistent with the statement given earlier that the inclusive disjunction is the assumption when there is ambiguity.   The earth is made of green cheese and either the moon is made of green cheese or the earth is not.      Let \"Jane did their homework\" and \"Jane went for a jog.\" Translate the following logical propositions into English sentences.    Jane did their homework and went for a jog.    It is not the case that Jane did their homework and went for a jog.    Jane went for a jog but did not do their homework.    Jane didn't go for a jog or they didn't do their homework.    It is not the case that Jane didn't do their homework.    Either Jane went for a jog, or didn't go for a jog, but not both.    For each pair of sentences below, is the second sentence the negation of the first?   Pat owes Peter money. Peter owes Pat money. No. Neither might owe the other any money.   The number of students in Math 156 is greater than 25. The number of students in Math 156 is less than 25. No. The number of students in Math 156 could be equal to 25.   Jason, the math instructor, is fabulously rich. Jason, the math instructor, is financially poor. No. Jason might be in the middle income class - neither rich nor poor.    Answer the questions assuming that each of the given statements is true. If you cannot answer the question, state whether \"the situation is not possible\" or \"there's not enough information.\"   \"Pearl went for a jog and did her homework.\" Did Pearl go for a jog? Yes, Pearl went for a jog or else the given statement would be false.   \"Pearl went for a jog or did her homework.\" Did Pearl do her homework? There's not enough information. If Pearl went for a jog, then the statement is true regardless of whether she did her homework or not.   \"Pearl went for a jog.\" Did Pearl go for a jog and do her homework? There's not enough information. We're not told if she did her homework or not.   \"Pearl did not go for a jog.\" Did Pearl go for a jog and do her homework? No.     Solutions to Exercises   "
},
{
  "id": "example-35",
  "level": "2",
  "url": "sec-intro-to-logic.html#example-35",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": " Are these two sentences negations of each other?  \"The number of students in Math 156 is even.\"  \"The number of students in Math 156 is odd.\"  Answer: Yes, these two are negations of each other. Since we never have fractions of students in class, the number of students must be either zero or a natural number (that is, a whole number). Since whole numbers and natural numbers are either even or odd, all possible situations are accounted by these two sentences. (Zero is an even number.)  "
},
{
  "id": "example-36",
  "level": "2",
  "url": "sec-intro-to-logic.html#example-36",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": " Are these two sentences negations of each other?  \"Pat's Visa account balance is positive.\"  \"Pat's Visa account balance is negative.\"  Answer: No, these two statements are not negations of each other. There is a third possible case, \"Pat's Visa account balance is zero.\" Zero is an unsigned number, so the two statements don't account for all possible situations regarding Pat's Visa account balance. zero as unsigned number If the second statement was \"Pat's Visa account balance is negative or zero,\" then the second statement would be the negation of the first one (and vice versa).  "
},
{
  "id": "p-102",
  "level": "2",
  "url": "sec-intro-to-logic.html#p-102",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjunction "
},
{
  "id": "example-37",
  "level": "2",
  "url": "sec-intro-to-logic.html#example-37",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": " Under what conditions is the statement \"Jason does his marking and goes to a movie\" true?  Answer: \"Jason does his marking and goes to a movie\" is true provided that Jason does his marking and also goes to a movie. If he does one or the other but not both , then the statement \"Jason does his marking and goes to a movie\" is false. It is also false if Jason does neither action.  "
},
{
  "id": "p-105",
  "level": "2",
  "url": "sec-intro-to-logic.html#p-105",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inclusive disjunction "
},
{
  "id": "example-38",
  "level": "2",
  "url": "sec-intro-to-logic.html#example-38",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": " Under what conditions is the statement Jason does his marking or goes to a movie true?  Answer: Jason does his marking or goes to a movie is true provided at least one of the statements Jason does his marking or Jason goes to a movie is true. If Jason does his marking, then the compound sentence is true regardless of whether Jason goes to a movie or not. Similarly, if Jason goes to a movie, then the compound sentence is true whether Jason does his marking or not. In complete detail, the inclusive disjunction is true if any of the following are true:  Jason does his marking and also goes to a movie.  Jason does his marking but does not go to a movie.  Jason goes to a movie but does not do his marking.  The only case in which \"Jason does his marking or goes to a movie\" is false is if Jason neither goes to a movie nor does his marking.  "
},
{
  "id": "p-108",
  "level": "2",
  "url": "sec-intro-to-logic.html#p-108",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exclusive or exclusive disjunction "
},
{
  "id": "example-39",
  "level": "2",
  "url": "sec-intro-to-logic.html#example-39",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  Which or is meant in the following sentences or phrases?  Would you like milk or sugar in your tea?  Wanted dead or alive.    Answer:  The answer could be \"milk\", \"sugar\", \"both\", or \"neither\". Since \"both\" is an option, the inclusive or is intended.  The person who is wanted in one of these two states will either be dead or alive but not both, so exclusive or is the best interpretation.     "
},
{
  "id": "example-40",
  "level": "2",
  "url": "sec-intro-to-logic.html#example-40",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": " Under what conditions is the statement \"Jason does his marking or goes to a movie but not both\" true?  \"Jason does his marking or goes to a movie but not both\" is true provided exactly one of the two conditions is true. If he does his marking, then he cannot also go to a movie or else the exclusive disjunction is false. If he goes to a movie, then he cannot also do his marking or the statement is false. Truth of the statement means he doesn't do both, and he doesn't do neither.  "
},
{
  "id": "exercise-148",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-148",
  "type": "Exercise",
  "number": "2.1.4.1",
  "title": "",
  "body": "On September 6, 2006, mathematicians proved that is a prime number. Yes "
},
{
  "id": "exercise-149",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-149",
  "type": "Exercise",
  "number": "2.1.4.2",
  "title": "",
  "body": " Will you marry me? No. "
},
{
  "id": "exercise-150",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-150",
  "type": "Exercise",
  "number": "2.1.4.3",
  "title": "",
  "body": " Python is her favourite computing language. No "
},
{
  "id": "exercise-151",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-151",
  "type": "Exercise",
  "number": "2.1.4.4",
  "title": "",
  "body": " What is your favourite computing language? No "
},
{
  "id": "exercise-152",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-152",
  "type": "Exercise",
  "number": "2.1.4.5",
  "title": "",
  "body": " Please bring me a textbook. No. "
},
{
  "id": "exercise-153",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-153",
  "type": "Exercise",
  "number": "2.1.4.6",
  "title": "",
  "body": " The University of Victoria is located in Alberta. Yes. "
},
{
  "id": "exercise-154",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-154",
  "type": "Exercise",
  "number": "2.1.4.7",
  "title": "",
  "body": " Rich is seven feet tall or he is seven feet tall.  Symbolically, this silly statement is . "
},
{
  "id": "exercise-155",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-155",
  "type": "Exercise",
  "number": "2.1.4.8",
  "title": "",
  "body": " Either Rich is not seven feet tall or Susan does not have brown hair. From the context, you could go with either or  "
},
{
  "id": "exercise-156",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-156",
  "type": "Exercise",
  "number": "2.1.4.9",
  "title": "",
  "body": " It is not true that Rich is seven feet tall or Susan has brown hair.  The particular phrasing in this sentence indicates that care is being taken to avoid interpreting this as \"Rich is not seven feet tall or Susan has brown hair.\" That statement would be represented as (or, more redundantly, ).  Given the way the sentence is written, we should interpret it as . Later, when you study De Morgan's rules, you will learn a way to write in English that avoids any chance of misinterpretation.  "
},
{
  "id": "exercise-157",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-157",
  "type": "Exercise",
  "number": "2.1.4.10",
  "title": "",
  "body": " Rich is seven feet tall and Susan has brown hair.   "
},
{
  "id": "exercise-158",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-158",
  "type": "Exercise",
  "number": "2.1.4.11",
  "title": "",
  "body": " Either Rich is seven feet tall or Susan does not have brown hair, but not both.   "
},
{
  "id": "exercise-159",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-159",
  "type": "Exercise",
  "number": "2.1.4.12",
  "title": "",
  "body": " I will sit inside or outside. exclusive - you cannot sit inside and outside simultaneously. "
},
{
  "id": "exercise-160",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-160",
  "type": "Exercise",
  "number": "2.1.4.13",
  "title": "",
  "body": " During their movie marathon, my friends watched the Harry Potter movies or the Transformer movies. It is conceivable that they watched both series, so the inclusive disjunction should be assumed. "
},
{
  "id": "exercise-161",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-161",
  "type": "Exercise",
  "number": "2.1.4.14",
  "title": "",
  "body": " I will get an A or a B in the course. exclusive - only one grade is assigned to a course. "
},
{
  "id": "exercise-162",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-162",
  "type": "Exercise",
  "number": "2.1.4.15",
  "title": "",
  "body": " My answer is correct or incorrect. exclusive - your answer cannot be both correct and incorrect. "
},
{
  "id": "exercise-163",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-163",
  "type": "Exercise",
  "number": "2.1.4.16",
  "title": "",
  "body": " We need someone who speaks French or German. inclusive - a person who speaks both would be a good fit, too! "
},
{
  "id": "exercise-164",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-164",
  "type": "Exercise",
  "number": "2.1.4.17",
  "title": "",
  "body": " Either the moon is made of green cheese or both the moon and the earth are made of green cheese.   "
},
{
  "id": "exercise-165",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-165",
  "type": "Exercise",
  "number": "2.1.4.18",
  "title": "",
  "body": " The earth is made of green cheese and either the earth or the moon is made of green cheese. The disjunction in this statement is the inclusive disjunction, since both could conceivably be made of green cheese. Therefore, the translation is  "
},
{
  "id": "exercise-166",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-166",
  "type": "Exercise",
  "number": "2.1.4.19",
  "title": "",
  "body": " Either the earth is made of green cheese while the moon is not, or the moon is made of green cheese. The word while can be replaced with and without changing the meaning of the statement. The translation is . The exclusive disjunction is also acceptable, since the two \"disjunctives\" cannot both be true, but the answer given above is consistent with the statement given earlier that the inclusive disjunction is the assumption when there is ambiguity. "
},
{
  "id": "exercise-167",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-167",
  "type": "Exercise",
  "number": "2.1.4.20",
  "title": "",
  "body": " The earth is made of green cheese and either the moon is made of green cheese or the earth is not.   "
},
{
  "id": "exercise-168",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-168",
  "type": "Exercise",
  "number": "2.1.4.21",
  "title": "",
  "body": "  Jane did their homework and went for a jog. "
},
{
  "id": "exercise-169",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-169",
  "type": "Exercise",
  "number": "2.1.4.22",
  "title": "",
  "body": "  It is not the case that Jane did their homework and went for a jog. "
},
{
  "id": "exercise-170",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-170",
  "type": "Exercise",
  "number": "2.1.4.23",
  "title": "",
  "body": "  Jane went for a jog but did not do their homework. "
},
{
  "id": "exercise-171",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-171",
  "type": "Exercise",
  "number": "2.1.4.24",
  "title": "",
  "body": "  Jane didn't go for a jog or they didn't do their homework. "
},
{
  "id": "exercise-172",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-172",
  "type": "Exercise",
  "number": "2.1.4.25",
  "title": "",
  "body": "  It is not the case that Jane didn't do their homework. "
},
{
  "id": "exercise-173",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-173",
  "type": "Exercise",
  "number": "2.1.4.26",
  "title": "",
  "body": "  Either Jane went for a jog, or didn't go for a jog, but not both. "
},
{
  "id": "exercise-174",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-174",
  "type": "Exercise",
  "number": "2.1.4.27",
  "title": "",
  "body": " Pat owes Peter money. Peter owes Pat money. No. Neither might owe the other any money. "
},
{
  "id": "exercise-175",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-175",
  "type": "Exercise",
  "number": "2.1.4.28",
  "title": "",
  "body": " The number of students in Math 156 is greater than 25. The number of students in Math 156 is less than 25. No. The number of students in Math 156 could be equal to 25. "
},
{
  "id": "exercise-176",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-176",
  "type": "Exercise",
  "number": "2.1.4.29",
  "title": "",
  "body": " Jason, the math instructor, is fabulously rich. Jason, the math instructor, is financially poor. No. Jason might be in the middle income class - neither rich nor poor. "
},
{
  "id": "exercise-177",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-177",
  "type": "Exercise",
  "number": "2.1.4.30",
  "title": "",
  "body": " \"Pearl went for a jog and did her homework.\" Did Pearl go for a jog? Yes, Pearl went for a jog or else the given statement would be false. "
},
{
  "id": "exercise-178",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-178",
  "type": "Exercise",
  "number": "2.1.4.31",
  "title": "",
  "body": " \"Pearl went for a jog or did her homework.\" Did Pearl do her homework? There's not enough information. If Pearl went for a jog, then the statement is true regardless of whether she did her homework or not. "
},
{
  "id": "exercise-179",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-179",
  "type": "Exercise",
  "number": "2.1.4.32",
  "title": "",
  "body": " \"Pearl went for a jog.\" Did Pearl go for a jog and do her homework? There's not enough information. We're not told if she did her homework or not. "
},
{
  "id": "exercise-180",
  "level": "2",
  "url": "sec-intro-to-logic.html#exercise-180",
  "type": "Exercise",
  "number": "2.1.4.33",
  "title": "",
  "body": " \"Pearl did not go for a jog.\" Did Pearl go for a jog and do her homework? No. "
},
{
  "id": "sec-venn-diagrams",
  "level": "1",
  "url": "sec-venn-diagrams.html",
  "type": "Section",
  "number": "2.2",
  "title": "Venn Diagrams",
  "body": " Venn Diagrams   Venn Diagrams with One Proposition  One way to visualize operations on propositions is to use a Venn diagram. Although Venn diagrams are more commonly used with sets, there are many commonalities between the operations on sets and on logical propositions. The Venn diagram for a single logical proposition is shown below.       In this diagram, the rectangle stands for the universe, while the circle denotes the logical proposition . We then shade in regions of the diagram to indicate the regions of interest. For example, when we want to indicate the proposition , we shade the inside of the circle, as shown in the left diagram. If instead we want to show the proposition , we shade outside of the circle, as in the diagram on the right.     Shading for    Venn diagram showing shading for a single proposition .      Shading for    Venn diagram showing shading for the negation of a single proposition .         Venn Diagrams with Two Propositions  Venn diagrams with only one proposition don't generally contain much information, as it's usually pretty easy to visualize what and mean when you have only the one proposition. It gets more interesting when you have propositions and in the same diagram, as you can see in the next figure.    Venn diagram with two propositions.     Let's try doing some shading to represent operations on the propositions and . To begin with, let's examine the shading for as shown in . It looks very similar to the shading for the one-proposition diagram, but you should notice that in order to shade in all of , two regions have been shaded in: the crescent-moon shaped part which represent the part of that does not overlap with and the lozenge-shaped part which represents the part of that does overlap with . Similarly, is shown in .     Shading for    Venn diagram for two propositions p and q, with only that for p shaded.      Shading for    Venn diagram for two propositions p and q, with only that for q shaded.       To represent compound propositions using a Venn diagram, it is helpful first to consider the basic regions of the diagram. In the figure below, the four basic regions are numbered 1 through 4:    Basic regions of a two-proposition Venn diagram.   Figure showing the basic regions of a two-proposition Venn-diagram.      For example, if you wished to show the Venn diagram for , recall that or means one or the other or both . Looking at and , we see that we should shade regions 1, 2, and 3:    Venn diagram for the compound statement    Venn diagram showing the statement p or q.      To show the diagram for , shade the basic regions that are shaded in both of and . This means that you would shade only region 3:    Venn diagram for the compound statement    Venn diagram showing the statement p and q.        More Complications  Suppose you wished to create a Venn diagram representing . One way to do this is by constructing the diagram for and the diagram for , and then consider conjunction. Let's call this the visual step-by-step method.  Here are the diagrams for and for :   Venn diagram for    A Venn diagram containing two statements, p and q, showing the negation of statement p.      Shading for    Venn diagram for two propositions p and q, with only that for q shaded.       Now form the conjunction of the two diagrams by shading only the regions that are shaded in both of the figures:    Venn diagram for    A Venn diagram for the compound statement not p and q.      Another way to do this is to list the basic regions associated with each of the statements appearing in the compound statement, and from them determine which basic regions are associated with the compound statement itself. Referring to , we see that   is associated with regions 2 and 4   is associated with regions 2 and 3  The conjunction of these two statements involves the basic region(s) that are common to both of the statements. In this case, only basic region 2 is common. This leads to .  To find using the visual step-by-step method, you'd take the diagrams in and and then shade the regions that are shaded in at least one of those two diagrams. Alternatively, you can list the basic regions associated with each of the diagrams and then identify the basic regions that appear in at least one of the two lists. Referring to the enumerations given earlier, we see that regions 2, 3, and 4 appear on those lists (either on one or the other or both). So those are the regions that are shaded. Either way, the result is as follows:    Venn diagram for the compound statement    A Venn diagram showing the shading for the inclusive disjunction of q and the negation of p.       Shade a Venn diagram corresponding to .   Using the visual step-by-step method, first draw the diagrams for and for . The diagram for is in , and here is the diagram for :    Venn diagram for    Venn diagram for the negation of q.      Now shade the regions that are shaded in at least one of those two diagrams to get the following:    Venn diagram for    Venn diagram showing the inclusive disjunction of the negations of p and q.      Alternatively, we can look at the basic regions:   : regions 2 and 4   : regions 1 and 4  We are interested in the inclusive disjunction, so shade any region that appears at least once in those lists: regions 1, 2, and 4. This gives the figure above.      Negation and De Morgan's Laws  Consider the proposition . The brackets indicate that we must find first, and then form the negation. The diagram for is shown in . The diagram for is obtained by \"reversing\": shade all previously unshaded regions, and unshade the shaded region. This yields the following:    Venn diagram for    A Venn diagram showing the negation of the conjunction of p with q.      This is identical to the Venn diagram for , so we can conclude that the compound statement is equivalent to the compound statement . Note that the particular nature of statements and do not affect this equivalence. Similarly, it can be shown that is equivalent to . Together, these two assertions of equivalence are known as De Morgan's Laws :  De Morgan's Laws   Let and be any propositions. Then   where the symbol is to be read as \"is logically equivalent to\".       Venn Diagrams with Three Propositions  We can construct Venn diagrams for compound statements containing three propositions:    A Venn diagram for a compound statement with three propositions p, q, and r.     Notice that there is a circle for each statement, and that there are regions where some or all of the circles overlap. To find out how to shade the diagram for compound statements such as , use either the visual step-by-step method, or the method of enumerating basic regions.  Here are the diagrams for each of , , and :     A three-proposition Venn diagram with only statement p shaded.     A three-proposition Venn diagram with only statement q shaded.     A three-proposition Venn diagram with only statement r shaded.      Then gives    A three-proposition Venn diagram showing the inclusive disjunction of p and q.     Now form the intersection of this with the diagram for :        A Venn diagram for the conjunction of r with the inclusive disjunction of p and q.      Here is an enumeration of the basic regions. It doesn't really matter how you assign labels to the regions, as long as you are consistent in the analysis you perform using the enumeration.    Basic regions in a three-proposition Venn diagram   A Venn diagram showing the basic regions in the case of three overlapping propositions.      Using the enumeration method, we see that   consists of regions 1, 4, 5, and 7   consists of 2, 4, 6, and 7   consists of 3, 5, 6, and 7  Therefore, consists of regions 1, 2, 4, 5, 6, and 7 since these regions appear in at least one of the two lists of regions for and .  Therefore, consists of regions 5, 6, and 7 because those regions appear on the lists for both  and .  This leads to .  Two other important cases are shown below. Note that the captions are indicated without brackets because and      A Venn diagram for the inclusive disjunction of p, q, and r.     A Venn diagram for the conjunction of p, q, and r.         Draw Venn diagrams using two propositions and , shading in the appropriate regions for the following situations.      Venn diagram for the inclusive disjunction of p and q         Venn diagram for the conjunction of p and the negation of q         Venn diagram for the conjunction of the negation of p and the negation of q      (Compare with #2.)   Venn diagram for the negation of the conjunction of p and the negation of q         Venn diagram for the negation of the inclusive disjunction of p and q         Venn diagram for the conjunction of p with the inclusive disjunction of the negation of p with q.         Venn diagram for the inclusive disjunction of p with the conjunctiong of p with q.       Draw Venn diagrams using three propositions , , and , shading in the appropriate regions for the following situations.      Venn diagram for the inclusive disjunction of p, q, and r         Venn diagram for the inclusive disjunction of r with the conjunction of p and q.         Venn diagram for the conjunction of p and the inclusive disjunction of q with r.         Venn diagram for inclusive disjunction of p, the negation of q, and of r.         Venn diagram for the conjunction of the negation of p with q and with the negation of r.         Venn diagram for the inclusive disjunction of the conjunction of p and q with the negation of r.         Venn diagram for the conjunction of the negation of q with the inclusive disjunction of r with the negation of p.        Solutions to Exercises   "
},
{
  "id": "shading-for-p",
  "level": "2",
  "url": "sec-venn-diagrams.html#shading-for-p",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Shading for    Venn diagram showing shading for a single proposition .    "
},
{
  "id": "shading-for-not-p",
  "level": "2",
  "url": "sec-venn-diagrams.html#shading-for-not-p",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " Shading for    Venn diagram showing shading for the negation of a single proposition .    "
},
{
  "id": "shading-for-p2",
  "level": "2",
  "url": "sec-venn-diagrams.html#shading-for-p2",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": " Shading for    Venn diagram for two propositions p and q, with only that for p shaded.    "
},
{
  "id": "shading-for-q2",
  "level": "2",
  "url": "sec-venn-diagrams.html#shading-for-q2",
  "type": "Figure",
  "number": "2.2.4",
  "title": "",
  "body": " Shading for    Venn diagram for two propositions p and q, with only that for q shaded.    "
},
{
  "id": "p-127",
  "level": "2",
  "url": "sec-venn-diagrams.html#p-127",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basic regions "
},
{
  "id": "basic-regions",
  "level": "2",
  "url": "sec-venn-diagrams.html#basic-regions",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": " Basic regions of a two-proposition Venn diagram.   Figure showing the basic regions of a two-proposition Venn-diagram.    "
},
{
  "id": "p-or-q",
  "level": "2",
  "url": "sec-venn-diagrams.html#p-or-q",
  "type": "Figure",
  "number": "2.2.6",
  "title": "",
  "body": " Venn diagram for the compound statement    Venn diagram showing the statement p or q.    "
},
{
  "id": "p-and-q",
  "level": "2",
  "url": "sec-venn-diagrams.html#p-and-q",
  "type": "Figure",
  "number": "2.2.7",
  "title": "",
  "body": " Venn diagram for the compound statement    Venn diagram showing the statement p and q.    "
},
{
  "id": "not-p",
  "level": "2",
  "url": "sec-venn-diagrams.html#not-p",
  "type": "Figure",
  "number": "2.2.8",
  "title": "",
  "body": " Venn diagram for    A Venn diagram containing two statements, p and q, showing the negation of statement p.    "
},
{
  "id": "shading-for-q2-again",
  "level": "2",
  "url": "sec-venn-diagrams.html#shading-for-q2-again",
  "type": "Figure",
  "number": "2.2.9",
  "title": "",
  "body": " Shading for    Venn diagram for two propositions p and q, with only that for q shaded.    "
},
{
  "id": "not-p-and-q",
  "level": "2",
  "url": "sec-venn-diagrams.html#not-p-and-q",
  "type": "Figure",
  "number": "2.2.10",
  "title": "",
  "body": " Venn diagram for    A Venn diagram for the compound statement not p and q.    "
},
{
  "id": "not-p-or-q",
  "level": "2",
  "url": "sec-venn-diagrams.html#not-p-or-q",
  "type": "Figure",
  "number": "2.2.11",
  "title": "",
  "body": " Venn diagram for the compound statement    A Venn diagram showing the shading for the inclusive disjunction of q and the negation of p.    "
},
{
  "id": "example-41",
  "level": "2",
  "url": "sec-venn-diagrams.html#example-41",
  "type": "Example",
  "number": "2.2.12",
  "title": "",
  "body": " Shade a Venn diagram corresponding to .   Using the visual step-by-step method, first draw the diagrams for and for . The diagram for is in , and here is the diagram for :    Venn diagram for    Venn diagram for the negation of q.      Now shade the regions that are shaded in at least one of those two diagrams to get the following:    Venn diagram for    Venn diagram showing the inclusive disjunction of the negations of p and q.      Alternatively, we can look at the basic regions:   : regions 2 and 4   : regions 1 and 4  We are interested in the inclusive disjunction, so shade any region that appears at least once in those lists: regions 1, 2, and 4. This gives the figure above.   "
},
{
  "id": "neg-of-p-and-q",
  "level": "2",
  "url": "sec-venn-diagrams.html#neg-of-p-and-q",
  "type": "Figure",
  "number": "2.2.15",
  "title": "",
  "body": " Venn diagram for    A Venn diagram showing the negation of the conjunction of p with q.    "
},
{
  "id": "p-147",
  "level": "2",
  "url": "sec-venn-diagrams.html#p-147",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "De Morgan's Laws "
},
{
  "id": "r-and-porq",
  "level": "2",
  "url": "sec-venn-diagrams.html#r-and-porq",
  "type": "Figure",
  "number": "2.2.17",
  "title": "",
  "body": "     A Venn diagram for the conjunction of r with the inclusive disjunction of p and q.    "
},
{
  "id": "basic-regions-3",
  "level": "2",
  "url": "sec-venn-diagrams.html#basic-regions-3",
  "type": "Figure",
  "number": "2.2.18",
  "title": "",
  "body": " Basic regions in a three-proposition Venn diagram   A Venn diagram showing the basic regions in the case of three overlapping propositions.    "
},
{
  "id": "exercise-181",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-181",
  "type": "Exercise",
  "number": "2.2.6.1",
  "title": "",
  "body": "    Venn diagram for the inclusive disjunction of p and q    "
},
{
  "id": "exercise-182",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-182",
  "type": "Exercise",
  "number": "2.2.6.2",
  "title": "",
  "body": "    Venn diagram for the conjunction of p and the negation of q    "
},
{
  "id": "exercise-183",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-183",
  "type": "Exercise",
  "number": "2.2.6.3",
  "title": "",
  "body": "    Venn diagram for the conjunction of the negation of p and the negation of q    "
},
{
  "id": "exercise-184",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-184",
  "type": "Exercise",
  "number": "2.2.6.4",
  "title": "",
  "body": " (Compare with #2.)   Venn diagram for the negation of the conjunction of p and the negation of q    "
},
{
  "id": "exercise-185",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-185",
  "type": "Exercise",
  "number": "2.2.6.5",
  "title": "",
  "body": "    Venn diagram for the negation of the inclusive disjunction of p and q    "
},
{
  "id": "exercise-186",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-186",
  "type": "Exercise",
  "number": "2.2.6.6",
  "title": "",
  "body": "    Venn diagram for the conjunction of p with the inclusive disjunction of the negation of p with q.    "
},
{
  "id": "exercise-187",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-187",
  "type": "Exercise",
  "number": "2.2.6.7",
  "title": "",
  "body": "    Venn diagram for the inclusive disjunction of p with the conjunctiong of p with q.    "
},
{
  "id": "exercise-188",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-188",
  "type": "Exercise",
  "number": "2.2.6.8",
  "title": "",
  "body": "    Venn diagram for the inclusive disjunction of p, q, and r    "
},
{
  "id": "exercise-189",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-189",
  "type": "Exercise",
  "number": "2.2.6.9",
  "title": "",
  "body": "    Venn diagram for the inclusive disjunction of r with the conjunction of p and q.    "
},
{
  "id": "exercise-190",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-190",
  "type": "Exercise",
  "number": "2.2.6.10",
  "title": "",
  "body": "    Venn diagram for the conjunction of p and the inclusive disjunction of q with r.    "
},
{
  "id": "exercise-191",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-191",
  "type": "Exercise",
  "number": "2.2.6.11",
  "title": "",
  "body": "    Venn diagram for inclusive disjunction of p, the negation of q, and of r.    "
},
{
  "id": "exercise-192",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-192",
  "type": "Exercise",
  "number": "2.2.6.12",
  "title": "",
  "body": "    Venn diagram for the conjunction of the negation of p with q and with the negation of r.    "
},
{
  "id": "exercise-193",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-193",
  "type": "Exercise",
  "number": "2.2.6.13",
  "title": "",
  "body": "    Venn diagram for the inclusive disjunction of the conjunction of p and q with the negation of r.    "
},
{
  "id": "exercise-194",
  "level": "2",
  "url": "sec-venn-diagrams.html#exercise-194",
  "type": "Exercise",
  "number": "2.2.6.14",
  "title": "",
  "body": "    Venn diagram for the conjunction of the negation of q with the inclusive disjunction of r with the negation of p.    "
},
{
  "id": "sec-logical-equivalence",
  "level": "1",
  "url": "sec-logical-equivalence.html",
  "type": "Section",
  "number": "2.3",
  "title": "Logical Equivalence",
  "body": " Logical Equivalence   Truth Tables   Truth Tables with Two Variables  Let us consider the propositions and . Since they are propositions, is either true or false and is also either true or false. This leads us to four possible combinations of and :   and are both false.   is false and is true   is true and is false   and are both true  We can combine these possibilities into a table called a truth table. truth table for propositions  proposition truth table for We can add further columns to find out what the value of other compound propositions for each combination of and as well. Suppose we wished to find out what the truth table was for . Then the table would look like the following.              F  F  F    F  T  F    T  F  F    T  T  T   For example, when is false and is true (the second row, where = F and = T), then is false because one of them is false (they are not both true).  Similarly, the truth table for is              F  F  F    F  T  T    T  F  T    T  T  T     If we like, we can combine the two tables above into a single table like so:                 F  F  F  F    F  T  F  T    T  F  F  T    T  T  T  T     Another way to indicate F and T in a truth table is to use 0 and 1, respectively. This mode of representation will be used later on, so it is a good idea to practise it now. Here is the previous table re-written with this alternate notation.                 0  0  0  0    0  1  0  1    1  0  0  1    1  1  1  1       Truth Tables with One Variable  What if we were interested in the truth table for ? Since this truth table contains only one variable rather than two, it will only have two rows since can either be true or false (and yes, you could omit the second column if you wish).              0  0  0    1  1  1     Let's now look at how to write the truth table for , where 1 means a statement that is always true. (Be careful! The number 1 is a constant, not a variable. It never takes the value of zero.) The table would look like:                                   Notice that the last column looks like the first, so has the same values as . We say, then, that is logically equivalent to . logical equivalence of propositions The topic of logical equivalence will be examined in more detail later on.    Negations in Truth Tables  To negate a variable, we simply switch the value of each entry in that column from its previous value. For example, consider the truth table for . We start with a column for and one for . To populate the latter, we have to negate . To do this, we take every entry in the column and switch all the zeros to ones and the ones to zeros. We'll then form the inclusive disjunction of those two columns.              0  1  1    1  0  1     Notice that is always true. A concrete example will hopefully illustrate the reasonableness of this: \"Jason's shirt is either plaid or not plaid.\" This statement is true regardless of the pattern on Jason's shirt.  To negate an expession, we use the same idea and switch the value of each entry in the column for that expression, whether that expression is simple or compound. For example, here is the truth table for :      1          0  1  0  1    1  1  1  0   The fourth column is the negation of the third column: the values in the fourth column are obtained by applying the switches and to the values in the third column.    Truth Tables with Three Variables  A truth table with three variables will contain 8 rows in order to display all the possible truth values for the three statements , , and . For example, the truth table for is                          0  0  0  1  1  1  1    0  0  1  0  0  1  0    0  1  0  1  1  1  1    0  1  1  0  1  1  1    1  0  0  1  1  0  0    1  0  1  0  0  0  0    1  1  0  1  1  0  0    1  1  1  0  1  0  0     It is important to note that the actual order of the rows doesn't matter for the truth table to be complete. However, if you write out the table with the rows in a random order, it is very easy to duplicate one of the previous rows. If you continue to fill the table until you have the correct total number of rows, then the duplication means that one of the combinations of variables is missing.  Therefore, it is a good idea to fill the table in a systematic way. Look at the column entries , starting with the leftmost column. Then look at the next column, then the next. Note the pattern of the entries in each column. If you mimic that pattern in your own work, you will minimize the chances of missing a combination variables.  Another common mistake is to take a shortcut and start the truth table with one of the columns being, for example, . This is not correct. Truth tables must always start with unnegated variables.     Logical Equivalence  Two logical expressions are said to be logically equivalent if they have the same values in their columns in the truth table. logical equivalence of propositions  equivalence, logical of propositions We saw in our examples above that was logically equivalent to 1\\, and was logically equivalent to . The symbol for logically equivalent to is , so and .   Is logically equivalent to ?                             0  0  0  0  0  0  0    0  0  1  1  0  0  1    0  1  0  1  0  0  0    0  1  1  1  0  0  1    1  0  0  0  0  0  0    1  0  1  1  1  0  1    1  1  0  1  1  1  1    1  1  1  1  1  1  1   These two expressions are not logically equivalent because their columns in the truth table, the 5th and 7th columns, are not identical. This example shows once more that order of operations is important.     Simplify .                          0  0  1  0  0  0    0  1  1  0  1  1    1  0  0  0  0  0    1  1  0  1  0  1   Notice that the last column is identical to the column for . Therefore, , and so the simplified expression is      Is logically equivalent to ?                                0  0  0  1  1  0  0  0    0  1  1  1  0  0  1  1    1  0  1  0  1  1  0  1    1  1  0  0  0  0  0  0   Comparing columns 3 and 8, we see that the two statements are logically equivalent.       Give the truth tables for the following logical expressions.                  0  1  0    1  0  0                     0  1  1    1  1  1                        0  0  1  0    0  1  0  0    1  0  1  1    1  1  0  0                        0  0  0  1    0  1  1  0    1  0  1  0    1  1  0  0                        0  0  1  1    0  1  0  0    1  0  1  0    1  1  0  1                           0  0  1  0  0    0  1  1  1  1    1  0  0  0  1    1  1  0  0  1                           0  0  0  0  0    0  0  1  0  0    0  1  0  1  0    0  1  1  1  1    1  0  0  1  0    1  0  1  1  1    1  1  0  1  0    1  1  1  1  1                           0  0  0  1  1    0  0  1  0  0    0  1  0  1  1    0  1  1  0  1    1  0  0  1  1    1  0  1  0  1    1  1  0  1  1    1  1  1  0  1                                 0  0  1  0  1  0  0    0  1  0  0  0  1  1    1  0  1  0  1  0  0    1  1  0  1  1  0  1                                 0  0  1  1  1  1  1    0  1  1  0  1  1  1    1  0  0  1  1  0  0    1  1  0  0  0  1  0       Are the two expressions logically equivalent?   and                            0  0  0  1  1  1  1    0  1  0  1  1  0  0    1  0  0  1  0  1  0    1  1  1  0  0  0  0   No, because the 4th and the 7th columns are not the same.   and                            0  0  0  1  1  1  1    0  1  1  0  1  0  0    1  0  1  0  0  1  0    1  1  1  0  0  0  0   Yes, because the 4th and the 7th columns (the columns corresponding to the two statements of interest) are identical.   and                         0  0  0  1  1  0    0  1  1  1  0  1    1  0  1  0  1  1    1  1  0  0  0  0   Yes, because the columns corresponding to the statements of interest (the 3rd and the 6th) are identical.   and                            0  0  0  0  0  0  0    0  0  1  0  0  0  0    0  1  0  0  0  1  0    0  1  1  1  1  1  1    1  0  0  0  1  1  0    1  0  1  0  1  1  1    1  1  0  0  1  1  0    1  1  1  1  1  1  1   No, because the corresponding columns (columns 5 and 7) are not identical.   and                   0  0  0  0    0  1  0  0    1  0  0  1    1  1  1  1   Yes, because the corresponding columns (1 and 4) are identical.   and                            0  0  0  0  0  0  0    0  0  1  0  1  1  1    0  1  0  1  1  1  1    0  1  1  1  1  1  1    1  0  0  1  1  0  1    1  0  1  1  1  1  1    1  1  0  1  1  1  1    1  1  1  1  1  1  1   Yes, because the corresponding columns are identical (5th and 7th).   and                               0  0  0  1  1  0  1  1    0  1  1  1  0  0  0  0    1  0  1  0  1  0  0  0    1  1  0  0  0  1  0  1   No, because the corresponding columns (3 and 8) are not identical. Can you see how the two statements are related?    Simplify each statement.                  0  0  0    1  1  1   So . (You can omit the second column of this table, if you wish.)                  0  1  1    1  0  1   This statement is always true. It is logically equivalent to 1.                  0  0  0    1  0  0   This statement is always false. It is logically equivalent to 0.                  0  1  1    1  0  1   This expression is logically equivalent to 1.                           0  0  0  1  1  0    0  1  1  0  0  0    1  0  1  1  0  0    1  1  0  0  1  0   The expression simplifies to 0.                     0  0  0  0    0  1  0  0    1  0  0  1    1  1  1  1   Comparing the first and last columns, we see that                      0  0  0  0    0  1  1  1    1  0  1  0    1  1  1  1   Comparing columns 2 and 4, we see that                         0  0  1  1  0    0  1  1  1  0    1  0  0  0  0    1  1  0  1  1   This statement is true only if both and are true. That is, it is equivalent to .                        0  0  1  0  0    0  1  1  1  1    1  0  0  0  1    1  1  0  0  1   This statement is false only if both and are false. It is equivalent to .     Solutions to Exercises   "
},
{
  "id": "p-169",
  "level": "2",
  "url": "sec-logical-equivalence.html#p-169",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logically equivalent "
},
{
  "id": "p-177",
  "level": "2",
  "url": "sec-logical-equivalence.html#p-177",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logically equivalent "
},
{
  "id": "example-42",
  "level": "2",
  "url": "sec-logical-equivalence.html#example-42",
  "type": "Example",
  "number": "2.3.1",
  "title": "",
  "body": " Is logically equivalent to ?                             0  0  0  0  0  0  0    0  0  1  1  0  0  1    0  1  0  1  0  0  0    0  1  1  1  0  0  1    1  0  0  0  0  0  0    1  0  1  1  1  0  1    1  1  0  1  1  1  1    1  1  1  1  1  1  1   These two expressions are not logically equivalent because their columns in the truth table, the 5th and 7th columns, are not identical. This example shows once more that order of operations is important.   "
},
{
  "id": "example-43",
  "level": "2",
  "url": "sec-logical-equivalence.html#example-43",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": " Simplify .                          0  0  1  0  0  0    0  1  1  0  1  1    1  0  0  0  0  0    1  1  0  1  0  1   Notice that the last column is identical to the column for . Therefore, , and so the simplified expression is    "
},
{
  "id": "example-44",
  "level": "2",
  "url": "sec-logical-equivalence.html#example-44",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": " Is logically equivalent to ?                                0  0  0  1  1  0  0  0    0  1  1  1  0  0  1  1    1  0  1  0  1  1  0  1    1  1  0  0  0  0  0  0   Comparing columns 3 and 8, we see that the two statements are logically equivalent.   "
},
{
  "id": "exercise-195",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-195",
  "type": "Exercise",
  "number": "2.3.3.1",
  "title": "",
  "body": "                0  1  0    1  0  0    "
},
{
  "id": "exercise-196",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-196",
  "type": "Exercise",
  "number": "2.3.3.2",
  "title": "",
  "body": "                0  1  1    1  1  1    "
},
{
  "id": "exercise-197",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-197",
  "type": "Exercise",
  "number": "2.3.3.3",
  "title": "",
  "body": "                   0  0  1  0    0  1  0  0    1  0  1  1    1  1  0  0    "
},
{
  "id": "exercise-198",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-198",
  "type": "Exercise",
  "number": "2.3.3.4",
  "title": "",
  "body": "                   0  0  0  1    0  1  1  0    1  0  1  0    1  1  0  0    "
},
{
  "id": "exercise-199",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-199",
  "type": "Exercise",
  "number": "2.3.3.5",
  "title": "",
  "body": "                   0  0  1  1    0  1  0  0    1  0  1  0    1  1  0  1    "
},
{
  "id": "exercise-200",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-200",
  "type": "Exercise",
  "number": "2.3.3.6",
  "title": "",
  "body": "                      0  0  1  0  0    0  1  1  1  1    1  0  0  0  1    1  1  0  0  1    "
},
{
  "id": "exercise-201",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-201",
  "type": "Exercise",
  "number": "2.3.3.7",
  "title": "",
  "body": "                      0  0  0  0  0    0  0  1  0  0    0  1  0  1  0    0  1  1  1  1    1  0  0  1  0    1  0  1  1  1    1  1  0  1  0    1  1  1  1  1    "
},
{
  "id": "exercise-202",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-202",
  "type": "Exercise",
  "number": "2.3.3.8",
  "title": "",
  "body": "                      0  0  0  1  1    0  0  1  0  0    0  1  0  1  1    0  1  1  0  1    1  0  0  1  1    1  0  1  0  1    1  1  0  1  1    1  1  1  0  1    "
},
{
  "id": "exercise-203",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-203",
  "type": "Exercise",
  "number": "2.3.3.9",
  "title": "",
  "body": "                            0  0  1  0  1  0  0    0  1  0  0  0  1  1    1  0  1  0  1  0  0    1  1  0  1  1  0  1    "
},
{
  "id": "exercise-204",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-204",
  "type": "Exercise",
  "number": "2.3.3.10",
  "title": "",
  "body": "                            0  0  1  1  1  1  1    0  1  1  0  1  1  1    1  0  0  1  1  0  0    1  1  0  0  0  1  0    "
},
{
  "id": "exercise-205",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-205",
  "type": "Exercise",
  "number": "2.3.3.11",
  "title": "",
  "body": " and                            0  0  0  1  1  1  1    0  1  0  1  1  0  0    1  0  0  1  0  1  0    1  1  1  0  0  0  0   No, because the 4th and the 7th columns are not the same. "
},
{
  "id": "exercise-206",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-206",
  "type": "Exercise",
  "number": "2.3.3.12",
  "title": "",
  "body": " and                            0  0  0  1  1  1  1    0  1  1  0  1  0  0    1  0  1  0  0  1  0    1  1  1  0  0  0  0   Yes, because the 4th and the 7th columns (the columns corresponding to the two statements of interest) are identical. "
},
{
  "id": "exercise-207",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-207",
  "type": "Exercise",
  "number": "2.3.3.13",
  "title": "",
  "body": " and                         0  0  0  1  1  0    0  1  1  1  0  1    1  0  1  0  1  1    1  1  0  0  0  0   Yes, because the columns corresponding to the statements of interest (the 3rd and the 6th) are identical. "
},
{
  "id": "exercise-208",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-208",
  "type": "Exercise",
  "number": "2.3.3.14",
  "title": "",
  "body": " and                            0  0  0  0  0  0  0    0  0  1  0  0  0  0    0  1  0  0  0  1  0    0  1  1  1  1  1  1    1  0  0  0  1  1  0    1  0  1  0  1  1  1    1  1  0  0  1  1  0    1  1  1  1  1  1  1   No, because the corresponding columns (columns 5 and 7) are not identical. "
},
{
  "id": "exercise-209",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-209",
  "type": "Exercise",
  "number": "2.3.3.15",
  "title": "",
  "body": " and                   0  0  0  0    0  1  0  0    1  0  0  1    1  1  1  1   Yes, because the corresponding columns (1 and 4) are identical. "
},
{
  "id": "exer-logic-commutative",
  "level": "2",
  "url": "sec-logical-equivalence.html#exer-logic-commutative",
  "type": "Exercise",
  "number": "2.3.3.16",
  "title": "",
  "body": " and                            0  0  0  0  0  0  0    0  0  1  0  1  1  1    0  1  0  1  1  1  1    0  1  1  1  1  1  1    1  0  0  1  1  0  1    1  0  1  1  1  1  1    1  1  0  1  1  1  1    1  1  1  1  1  1  1   Yes, because the corresponding columns are identical (5th and 7th). "
},
{
  "id": "exercise-211",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-211",
  "type": "Exercise",
  "number": "2.3.3.17",
  "title": "",
  "body": " and                               0  0  0  1  1  0  1  1    0  1  1  1  0  0  0  0    1  0  1  0  1  0  0  0    1  1  0  0  0  1  0  1   No, because the corresponding columns (3 and 8) are not identical. Can you see how the two statements are related? "
},
{
  "id": "exercise-212",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-212",
  "type": "Exercise",
  "number": "2.3.3.18",
  "title": "",
  "body": "                0  0  0    1  1  1   So . (You can omit the second column of this table, if you wish.) "
},
{
  "id": "exercise-213",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-213",
  "type": "Exercise",
  "number": "2.3.3.19",
  "title": "",
  "body": "                0  1  1    1  0  1   This statement is always true. It is logically equivalent to 1. "
},
{
  "id": "exercise-214",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-214",
  "type": "Exercise",
  "number": "2.3.3.20",
  "title": "",
  "body": "                0  0  0    1  0  0   This statement is always false. It is logically equivalent to 0. "
},
{
  "id": "exercise-215",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-215",
  "type": "Exercise",
  "number": "2.3.3.21",
  "title": "",
  "body": "                0  1  1    1  0  1   This expression is logically equivalent to 1. "
},
{
  "id": "exercise-216",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-216",
  "type": "Exercise",
  "number": "2.3.3.22",
  "title": "",
  "body": "                         0  0  0  1  1  0    0  1  1  0  0  0    1  0  1  1  0  0    1  1  0  0  1  0   The expression simplifies to 0. "
},
{
  "id": "exercise-217",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-217",
  "type": "Exercise",
  "number": "2.3.3.23",
  "title": "",
  "body": "                   0  0  0  0    0  1  0  0    1  0  0  1    1  1  1  1   Comparing the first and last columns, we see that  "
},
{
  "id": "exercise-218",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-218",
  "type": "Exercise",
  "number": "2.3.3.24",
  "title": "",
  "body": "                   0  0  0  0    0  1  1  1    1  0  1  0    1  1  1  1   Comparing columns 2 and 4, we see that  "
},
{
  "id": "exercise-219",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-219",
  "type": "Exercise",
  "number": "2.3.3.25",
  "title": "",
  "body": "                      0  0  1  1  0    0  1  1  1  0    1  0  0  0  0    1  1  0  1  1   This statement is true only if both and are true. That is, it is equivalent to . "
},
{
  "id": "exercise-220",
  "level": "2",
  "url": "sec-logical-equivalence.html#exercise-220",
  "type": "Exercise",
  "number": "2.3.3.26",
  "title": "",
  "body": "                      0  0  1  0  0    0  1  1  1  1    1  0  0  0  1    1  1  0  0  1   This statement is false only if both and are false. It is equivalent to . "
},
{
  "id": "sec-boolean-algebra",
  "level": "1",
  "url": "sec-boolean-algebra.html",
  "type": "Section",
  "number": "2.4",
  "title": "Boolean Algebra",
  "body": " Boolean Algebra   Logic Circuits   A logic circuit or digital circuit is an electrical circuit based on a discrete number of voltage levels, usually two. logic circuit  digital circuit Two-level circuits usually have one voltage set at zero volts, and the circuit then behaves like a switch, being either on or off . switch A nice diagram for a switch looks like this:   so that when the switch is open, as in the diagram, no current exists and the switch is off . When the switch closes and there's a clear path from the left side to the right side, the switch is on .  A digital circuit then makes logical decisions, based on the input to the circuit. The simplest logic circuits are called gates . gate Physically, a gate is a transistor circuit which takes one or more voltage inputs and gives a single voltage output.  One way to represent the action of a gate is by using a truth table. As is usual in a truth table, all possible combinations of the input voltages are given, as well as the output of the gate for each set of inputs. Each input voltage is given a symbol, such as . When the input signal is off, the value of is given as 0, and when it is on, the value of is 1. The associated truth table then looks exactly like those we studied with logical propositions.    and gate  The switch representation of an and gate looks like this: switch representation and    It is a series circuit, and both switches must be closed (switched on ) for the circuit to carry current. You can see, then, that this is the same as  and  , since  and  is true only when both and are true.  Another common representation is the gate representation , which looks like this: gate representation and    In symbols, we write  and  as or just .    or gate  The switch representation of an or gate looks like this: switch representation or    It is a parallel circuit, and at least one switch must be closed (on) for the circuit to carry current (say from left to right). You can see, then, that this is the same as  or  , since  or  is true when either is true or is true, or both.  The gate representation looks like this: gate representation or    In symbols we write  or  as .    not gate  The not gate, or inverter , has the diagram gate representation not    and we write not  as , just as in set notation. If the negation happens in combination with another gate, we usually omit the triangle and just have a little circle to show the negation, as in the next subsection.     Gate Representations of Logic Circuits  The gate representation of the logic circuit for is then   with the round circle on the input negating it, so that the two inputs to the and gate are then and .  The gate representation for is   The or gate gives , and the little round circle on the output indicates the negation.   What is the logic circuit expression for the following gate diagram?           Boolean Algebra  The symbols used for circuits, , , and , are the same symbols as used in Boolean algebra. Boolean algebra In this type of algebra, each variable ( , , etc.) can take only the value 0 or 1.  Truth tables in Boolean algebra then look very similar to the truth tables that we've studied in logic. truth table for Boolean algebra  Boolean algebra truth table for For example, the truth table showing and is:                 0  0  0  0    0  1  0  1    1  0  0  1    1  1  1  1     If you have more than one operation happening in a Boolean expression, the order of operations is very similar to the order of operations in arithmetic. order of operations Boolean algebra  Boolean algebra order of operations For example, if you have the locical expression , in arithmetic you multiply before you add. In Boolean algebra, you perform the and before the or . Negation applies to the entire variable or expression.  The order of Boolean operations is indicated in the following examples:   First evaluate , then use the result as the first variable in the or operation with    First evaluate , then use that result as the second variable in the or operation with .   First evaluate the negation of , then use that result in the and operation with .   First evaluate , then negate the result. Note the implied grouping of .   First evaluate the grouped expression, then use the result in the and operation with .    Truth tables can be used to demonstrate logical equivalence between Boolean expressions.   Is logically equivalent to ?                            0  0  0  0  0  0  0    0  0  1  0  1  1  0    0  1  0  0  0  1  0    0  1  1  0  1  1  0    1  0  0  0  0  0  0    1  0  1  0  1  1  1    1  1  0  1  1  1  1    1  1  1  1  1  1  1   The 5th and the 7th columns correspond to the two expressions of interest. They are not identical, so these two expressions are not logically equivalent. Order of operations is important.      Boolean Syntax in Python  Python allows you to perform logical operations on Boolean variables in the way that you would expect, as you can see in the interactive window below. (The print() statements are needed to convince the underlying interpreter to display output. In a typical python shell, they are not needed.)      Draw the gate representation for the following logical expressions.                                                                   Write the Boolean expression which corresponds to the following gates.                                                            Give the truth tables for the following expressions.                  0  1  0    1  0  0                     0  1  1    1  1  1                        0  0  1  0    0  1  0  0    1  0  1  1    1  1  0  0                        0  0  0  1    0  1  1  0    1  0  1  0    1  1  1  0                           0  0  1  0  0    0  1  1  1  1    1  0  0  0  1    1  1  0  0  1                           0  0  0  0  0    0  0  1  0  0    0  1  0  1  0    0  1  1  1  1    1  0  0  1  0    1  0  1  1  1    1  1  0  1  0    1  1  1  1  1                              0  0  0  1  0  1    0  0  1  0  0  0    0  1  0  1  1  1    0  1  1  0  1  1    1  0  0  1  1  1    1  0  1  0  1  1    1  1  0  1  1  1    1  1  1  0  1  1       Are the two expressions logically equivalent? Justify your answer by giving a truth table.   and   No:                            0  0  0  1  1  1  1    0  1  0  1  1  0  0    1  0  0  1  0  1  0    1  1  1  0  0  0  0   The associated columns (4th and 7th) are not identical.    and   Yes:                            0  0  0  1  1  1  1    0  1  1  0  1  0  0    1  0  1  0  0  1  0    1  1  1  0  0  0  0   The associated columns (4th and 7th) are identical.    and   No:                            0  0  0  0  0  0  0    0  0  1  0  0  0  0    0  1  0  0  0  1  0    0  1  1  1  1  1  1    1  0  0  0  1  1  0    1  0  1  0  1  1  1    1  1  0  0  1  1  0    1  1  1  1  1  1  1   The associated columns (5th and 7th) are not identical.    and   Yes:                   0  0  0  0    0  1  0  0    1  0  0  1    1  1  1  1   The first and last columns are identical.    and   Yes:                            0  0  0  0  0  0  0    0  0  1  0  1  1  1    0  1  0  1  1  1  1    0  1  1  1  1  1  1    1  0  0  1  1  0  1    1  0  1  1  1  1  1    1  1  0  1  1  1  1    1  1  1  1  1  1  1   The 5th and 7th columns are identical.     Simplify the following logical expressions using truth tables.                  0  0  0    1  1  1    is equivalent to .                  0  0  0    1  1  1    is equivalent to .                  0  0  0    1  0  1    is equivalent to .                     0  0  0  0    0  1  0  0    1  0  0  1    1  1  1  1    is equivalent to .   - this one is a bit trickier. If you are stuck, try writing the truth tables for combinations of and , like for example, to find one that fits.                     0  0  1  1  0    0  1  1  1  0    1  0  0  0  0    1  1  0  1  1    is true only if both and are true, so the statement is equivalent to .     Solutions to Exercises   "
},
{
  "id": "p-182",
  "level": "2",
  "url": "sec-boolean-algebra.html#p-182",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gate "
},
{
  "id": "p-184",
  "level": "2",
  "url": "sec-boolean-algebra.html#p-184",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "switch representation "
},
{
  "id": "p-185",
  "level": "2",
  "url": "sec-boolean-algebra.html#p-185",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gate representation "
},
{
  "id": "ex-not-notAandB",
  "level": "2",
  "url": "sec-boolean-algebra.html#ex-not-notAandB",
  "type": "Example",
  "number": "2.4.1",
  "title": "",
  "body": " What is the logic circuit expression for the following gate diagram?        "
},
{
  "id": "example-46",
  "level": "2",
  "url": "sec-boolean-algebra.html#example-46",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": " Is logically equivalent to ?                            0  0  0  0  0  0  0    0  0  1  0  1  1  0    0  1  0  0  0  1  0    0  1  1  0  1  1  0    1  0  0  0  0  0  0    1  0  1  0  1  1  1    1  1  0  1  1  1  1    1  1  1  1  1  1  1   The 5th and the 7th columns correspond to the two expressions of interest. They are not identical, so these two expressions are not logically equivalent. Order of operations is important.   "
},
{
  "id": "exercise-221",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-221",
  "type": "Exercise",
  "number": "2.4.5.1",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-222",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-222",
  "type": "Exercise",
  "number": "2.4.5.2",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-223",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-223",
  "type": "Exercise",
  "number": "2.4.5.3",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-224",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-224",
  "type": "Exercise",
  "number": "2.4.5.4",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-225",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-225",
  "type": "Exercise",
  "number": "2.4.5.5",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-226",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-226",
  "type": "Exercise",
  "number": "2.4.5.6",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-227",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-227",
  "type": "Exercise",
  "number": "2.4.5.7",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-228",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-228",
  "type": "Exercise",
  "number": "2.4.5.8",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-229",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-229",
  "type": "Exercise",
  "number": "2.4.5.9",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-230",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-230",
  "type": "Exercise",
  "number": "2.4.5.10",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-231",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-231",
  "type": "Exercise",
  "number": "2.4.5.11",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-232",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-232",
  "type": "Exercise",
  "number": "2.4.5.12",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-233",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-233",
  "type": "Exercise",
  "number": "2.4.5.13",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-234",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-234",
  "type": "Exercise",
  "number": "2.4.5.14",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-235",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-235",
  "type": "Exercise",
  "number": "2.4.5.15",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-236",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-236",
  "type": "Exercise",
  "number": "2.4.5.16",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-237",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-237",
  "type": "Exercise",
  "number": "2.4.5.17",
  "title": "",
  "body": "      "
},
{
  "id": "exercise-238",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-238",
  "type": "Exercise",
  "number": "2.4.5.18",
  "title": "",
  "body": "                0  1  0    1  0  0    "
},
{
  "id": "exercise-239",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-239",
  "type": "Exercise",
  "number": "2.4.5.19",
  "title": "",
  "body": "                0  1  1    1  1  1    "
},
{
  "id": "exercise-240",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-240",
  "type": "Exercise",
  "number": "2.4.5.20",
  "title": "",
  "body": "                   0  0  1  0    0  1  0  0    1  0  1  1    1  1  0  0    "
},
{
  "id": "exercise-241",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-241",
  "type": "Exercise",
  "number": "2.4.5.21",
  "title": "",
  "body": "                   0  0  0  1    0  1  1  0    1  0  1  0    1  1  1  0    "
},
{
  "id": "exercise-242",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-242",
  "type": "Exercise",
  "number": "2.4.5.22",
  "title": "",
  "body": "                      0  0  1  0  0    0  1  1  1  1    1  0  0  0  1    1  1  0  0  1    "
},
{
  "id": "exercise-243",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-243",
  "type": "Exercise",
  "number": "2.4.5.23",
  "title": "",
  "body": "                      0  0  0  0  0    0  0  1  0  0    0  1  0  1  0    0  1  1  1  1    1  0  0  1  0    1  0  1  1  1    1  1  0  1  0    1  1  1  1  1    "
},
{
  "id": "exercise-244",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-244",
  "type": "Exercise",
  "number": "2.4.5.24",
  "title": "",
  "body": "                         0  0  0  1  0  1    0  0  1  0  0  0    0  1  0  1  1  1    0  1  1  0  1  1    1  0  0  1  1  1    1  0  1  0  1  1    1  1  0  1  1  1    1  1  1  0  1  1    "
},
{
  "id": "exercise-245",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-245",
  "type": "Exercise",
  "number": "2.4.5.25",
  "title": "",
  "body": " and   No:                            0  0  0  1  1  1  1    0  1  0  1  1  0  0    1  0  0  1  0  1  0    1  1  1  0  0  0  0   The associated columns (4th and 7th) are not identical.  "
},
{
  "id": "exercise-246",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-246",
  "type": "Exercise",
  "number": "2.4.5.26",
  "title": "",
  "body": " and   Yes:                            0  0  0  1  1  1  1    0  1  1  0  1  0  0    1  0  1  0  0  1  0    1  1  1  0  0  0  0   The associated columns (4th and 7th) are identical.  "
},
{
  "id": "exercise-247",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-247",
  "type": "Exercise",
  "number": "2.4.5.27",
  "title": "",
  "body": " and   No:                            0  0  0  0  0  0  0    0  0  1  0  0  0  0    0  1  0  0  0  1  0    0  1  1  1  1  1  1    1  0  0  0  1  1  0    1  0  1  0  1  1  1    1  1  0  0  1  1  0    1  1  1  1  1  1  1   The associated columns (5th and 7th) are not identical.  "
},
{
  "id": "exercise-248",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-248",
  "type": "Exercise",
  "number": "2.4.5.28",
  "title": "",
  "body": " and   Yes:                   0  0  0  0    0  1  0  0    1  0  0  1    1  1  1  1   The first and last columns are identical.  "
},
{
  "id": "exercise-249",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-249",
  "type": "Exercise",
  "number": "2.4.5.29",
  "title": "",
  "body": " and   Yes:                            0  0  0  0  0  0  0    0  0  1  0  1  1  1    0  1  0  1  1  1  1    0  1  1  1  1  1  1    1  0  0  1  1  0  1    1  0  1  1  1  1  1    1  1  0  1  1  1  1    1  1  1  1  1  1  1   The 5th and 7th columns are identical.  "
},
{
  "id": "exercise-250",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-250",
  "type": "Exercise",
  "number": "2.4.5.30",
  "title": "",
  "body": "                0  0  0    1  1  1    is equivalent to . "
},
{
  "id": "exercise-251",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-251",
  "type": "Exercise",
  "number": "2.4.5.31",
  "title": "",
  "body": "                0  0  0    1  1  1    is equivalent to . "
},
{
  "id": "exercise-252",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-252",
  "type": "Exercise",
  "number": "2.4.5.32",
  "title": "",
  "body": "                0  0  0    1  0  1    is equivalent to . "
},
{
  "id": "exercise-253",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-253",
  "type": "Exercise",
  "number": "2.4.5.33",
  "title": "",
  "body": "                   0  0  0  0    0  1  0  0    1  0  0  1    1  1  1  1    is equivalent to . "
},
{
  "id": "exercise-254",
  "level": "2",
  "url": "sec-boolean-algebra.html#exercise-254",
  "type": "Exercise",
  "number": "2.4.5.34",
  "title": "",
  "body": " - this one is a bit trickier. If you are stuck, try writing the truth tables for combinations of and , like for example, to find one that fits.                     0  0  1  1  0    0  1  1  1  0    1  0  0  0  0    1  1  0  1  1    is true only if both and are true, so the statement is equivalent to . "
},
{
  "id": "sec-logic-laws",
  "level": "1",
  "url": "sec-logic-laws.html",
  "type": "Section",
  "number": "2.5",
  "title": "Laws of Logic",
  "body": " Laws of Logic  laws of logic   You may have noticed some common patterns running through some of the exercises by now. Let's examine those patterns in more detail.  First, let us look at the connections between the two sets of symbols we've used so far.   Logic                   Boolean Algebra           0  1     In each case, we have symbols for negation, or , and and . There are also equivalences with False\/True for logic and 0\/1 (or off\/on) for Boolean algebra and logic circuits. Let's see what else they have in common.    Identity Laws  Consider the following truth table for the logical symbols.                          0  0  1  0  0  0  1    1  0  1  0  1  1  1     You can replace the logic symbols in this table with the corresponding Boolean algebra notation. From this, we can deduce the following identity laws : laws of logic identity laws  identity laws   Identity Laws        Logic           Boolean         It is interesting to note that the first three Boolean identity laws look like laws of normal arithmetic with numbers. The fourth law does not resemble any arithmetic law. This is a clue that Boolean algebra is not equivalent to the algebra associated with the real numbers.    Idempotent Laws  We deduce the idempotent laws in the same way. laws of logic idempotent laws  idempotent laws Consider the following table, given using logic notation:              0  0  0    1  1  1   Boolean algebra notation could have been used in this table, instead.  From this we can deduce the following:  Idempotent Laws        Logic           Boolean             Complement Laws  Similarly, truth tables can be used to deduce the complement laws : laws of logic complement laws  complement laws   Complement Laws        Logic           Boolean             Commutative Laws  The commutative laws state that the ordering of symbols is not significant for the logic operations and and or , and also for the corresponding operations in Boolean algebra. The commutative law does not apply to all operations. More on that later. laws of logic commutative laws  commutative laws   Commutative Laws        Logic           Boolean             Associative Laws   illustrates the associative law for or . You could construct a similar truth table for and . The associative laws in Boolean algebra form look just like the associative laws of multiplication and addition of real numbers. Remember, though, that Boolean algebra is not the same as the algebra of real numbers! laws of logic associative laws  associative laws   Associative Laws        Logic           Boolean             Summary So Far  Here are all the laws identified so far, collected into one table for easy reference. In the next subsection, we will examine how these laws are used to simplify logical\/Boolean expressions without having to resort to constructing truth tables.   Law  Logic  Boolean Algebra    Identity                                        Idempotent                    Complement                              Commutative                    Associative                       Simplifying Logical Expressions  logical equivalence using laws of logic  logical proposition simplifying with laws of logic  We use the laws of logic to simplify logical expressions or to prove logical equivalence without resorting to truth tables.  Suppose we wish to simplify . Note that this would require a truth table with 8 rows to show all combinations of , , and . Less work is required to simplify the expression using the laws of logic. You can think of the laws of logic as summary statements of truth tables.  The procedure for simplifying an expression using the laws of logic is to simplify each piece of the expression using a single law, then write the name of the law you are using to one side. Writing the name of the law is required , and not optional ! If you are using more than one law, then use a separate line for each law\/step.  Let's use the laws of logic to simplify the statement given earlier:             identity       associative       identity       commutative       complement       identity   So we see that .  The simplification can be done another way:             identity       complement       definition of or        identity   The conclusion is the same, as we should expect!   Simplify .               complement       idempotent       identity   (If you applied the laws correctly but in a different order or combination, you should still come to the same, correct conclusion.)     Which of the following statements is always true?  Darth Vader is both evil and not evil.  Darth Vader is both evil and evil.  Darth Vader is either evil or evil.  Darth Vader is either evil or not evil.   Statement (d) is true because . Note that you must assess each statement based on its logical structure, and not on the truth value of the instance.  Which of the following statements is always false?  The roadrunner has escaped from the wily coyote and he has not escaped from the wily coyote.  The roadrunner has escaped from the wily coyote and he has escaped from the wily coyote.  The roadrunner has escaped from the wily coyote or he has not escaped from the wily coyote.  The roadrunner has escaped from the wily coyote or he has escaped from the wily coyote.   Statement (a) is, symbolically, , which is logically equivalent to 0. So statement (a) is false regardless of whether roadrunner has or has not escaped from the wily coyote.  Use a truth table to prove each of the two idempotent laws. The proof amounts to comparing the first and last columns of each of these two tables:               0  0  0    1  1  1                 0  0  0    1  1  1      Use a truth table to prove the four identity laws. The four identity laws follow from the following observations: The column is the same as , the and the columns are the same as , and the column is the same as .                          0  0  1  0  0  0  1    1  0  1  0  1  1  1      Name the law of logic used in the following. Note that the variable names have been changed, but that the law is still valid.    Identity    Complement    Complement    Identity    Identity    Idempotent    Complement    Associative    Simplify the given expression, and state the name of the law you used. You should be able to do these in one step.     , identity     , complement     , complement     , idempotent     , identity     A note about the solutions provided for the remaining problems: There may be several different ways to simplify. Also, you might take steps in a different order. If you are concerned about the solutions given in this textbook, contact your instructor. (Also, the steps involving the commutative and associative laws are not explicitly written.)  Use the laws of logic to simplify the following logical expressions. If you're completely stuck, try using a truth table instead.              Idempotent         Complement         Identity                Idempotent         Identity                Complement         Identity       Use the laws of logic to simplify the following Boolean expressions. If you're completely stuck, try using a truth table instead.             Idempotent         Complement         Identity                Identity         Idempotent         Identity                Complement         Identity         Definition of and .      (Remember, and are two different ways to write the same expression.)          Complement         Identity       Prove the following Boolean expressions are equivalent using the laws of logic. On each line of your proof, manipulate only one side of the statement unless you are performing the same manipulation on both sides. If you're completely stuck, try using a truth table.                       Complement          Complement          Identity          Identity                          Identity          Complement          Identity          Complement                          Identity          Complement          Identity                          Idempotent        Solutions to Exercises.   "
},
{
  "id": "p-211",
  "level": "2",
  "url": "sec-logic-laws.html#p-211",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity laws "
},
{
  "id": "p-215",
  "level": "2",
  "url": "sec-logic-laws.html#p-215",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "idempotent laws "
},
{
  "id": "p-220",
  "level": "2",
  "url": "sec-logic-laws.html#p-220",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complement laws "
},
{
  "id": "p-224",
  "level": "2",
  "url": "sec-logic-laws.html#p-224",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commutative laws "
},
{
  "id": "p-228",
  "level": "2",
  "url": "sec-logic-laws.html#p-228",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "associative law "
},
{
  "id": "examp-simpl-logic-laws",
  "level": "2",
  "url": "sec-logic-laws.html#examp-simpl-logic-laws",
  "type": "Example",
  "number": "2.5.1",
  "title": "",
  "body": " Simplify .               complement       idempotent       identity   (If you applied the laws correctly but in a different order or combination, you should still come to the same, correct conclusion.)  "
},
{
  "id": "exercise-255",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-255",
  "type": "Exercise",
  "number": "2.5.8.1",
  "title": "",
  "body": "Which of the following statements is always true?  Darth Vader is both evil and not evil.  Darth Vader is both evil and evil.  Darth Vader is either evil or evil.  Darth Vader is either evil or not evil.   Statement (d) is true because . Note that you must assess each statement based on its logical structure, and not on the truth value of the instance. "
},
{
  "id": "exercise-256",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-256",
  "type": "Exercise",
  "number": "2.5.8.2",
  "title": "",
  "body": "Which of the following statements is always false?  The roadrunner has escaped from the wily coyote and he has not escaped from the wily coyote.  The roadrunner has escaped from the wily coyote and he has escaped from the wily coyote.  The roadrunner has escaped from the wily coyote or he has not escaped from the wily coyote.  The roadrunner has escaped from the wily coyote or he has escaped from the wily coyote.   Statement (a) is, symbolically, , which is logically equivalent to 0. So statement (a) is false regardless of whether roadrunner has or has not escaped from the wily coyote. "
},
{
  "id": "exercise-257",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-257",
  "type": "Exercise",
  "number": "2.5.8.3",
  "title": "",
  "body": "Use a truth table to prove each of the two idempotent laws. The proof amounts to comparing the first and last columns of each of these two tables:               0  0  0    1  1  1                 0  0  0    1  1  1     "
},
{
  "id": "exercise-258",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-258",
  "type": "Exercise",
  "number": "2.5.8.4",
  "title": "",
  "body": "Use a truth table to prove the four identity laws. The four identity laws follow from the following observations: The column is the same as , the and the columns are the same as , and the column is the same as .                          0  0  1  0  0  0  1    1  0  1  0  1  1  1    "
},
{
  "id": "exercise-259",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-259",
  "type": "Exercise",
  "number": "2.5.8.5",
  "title": "",
  "body": "  Identity "
},
{
  "id": "exercise-260",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-260",
  "type": "Exercise",
  "number": "2.5.8.6",
  "title": "",
  "body": "  Complement "
},
{
  "id": "exercise-261",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-261",
  "type": "Exercise",
  "number": "2.5.8.7",
  "title": "",
  "body": "  Complement "
},
{
  "id": "exercise-262",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-262",
  "type": "Exercise",
  "number": "2.5.8.8",
  "title": "",
  "body": "  Identity "
},
{
  "id": "exercise-263",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-263",
  "type": "Exercise",
  "number": "2.5.8.9",
  "title": "",
  "body": "  Identity "
},
{
  "id": "exercise-264",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-264",
  "type": "Exercise",
  "number": "2.5.8.10",
  "title": "",
  "body": "  Idempotent "
},
{
  "id": "exercise-265",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-265",
  "type": "Exercise",
  "number": "2.5.8.11",
  "title": "",
  "body": "  Complement "
},
{
  "id": "exercise-266",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-266",
  "type": "Exercise",
  "number": "2.5.8.12",
  "title": "",
  "body": "  Associative "
},
{
  "id": "exercise-267",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-267",
  "type": "Exercise",
  "number": "2.5.8.13",
  "title": "",
  "body": "   , identity "
},
{
  "id": "exercise-268",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-268",
  "type": "Exercise",
  "number": "2.5.8.14",
  "title": "",
  "body": "   , complement "
},
{
  "id": "exercise-269",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-269",
  "type": "Exercise",
  "number": "2.5.8.15",
  "title": "",
  "body": "   , complement "
},
{
  "id": "exercise-270",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-270",
  "type": "Exercise",
  "number": "2.5.8.16",
  "title": "",
  "body": "   , idempotent "
},
{
  "id": "exercise-271",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-271",
  "type": "Exercise",
  "number": "2.5.8.17",
  "title": "",
  "body": "   , identity "
},
{
  "id": "exercise-272",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-272",
  "type": "Exercise",
  "number": "2.5.8.18",
  "title": "",
  "body": "           Idempotent         Complement         Identity    "
},
{
  "id": "exercise-273",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-273",
  "type": "Exercise",
  "number": "2.5.8.19",
  "title": "",
  "body": "           Idempotent         Identity    "
},
{
  "id": "exercise-274",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-274",
  "type": "Exercise",
  "number": "2.5.8.20",
  "title": "",
  "body": "           Complement         Identity    "
},
{
  "id": "exercise-275",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-275",
  "type": "Exercise",
  "number": "2.5.8.21",
  "title": "",
  "body": "           Idempotent         Complement         Identity    "
},
{
  "id": "exercise-276",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-276",
  "type": "Exercise",
  "number": "2.5.8.22",
  "title": "",
  "body": "           Identity         Idempotent         Identity    "
},
{
  "id": "exercise-277",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-277",
  "type": "Exercise",
  "number": "2.5.8.23",
  "title": "",
  "body": "           Complement         Identity         Definition of and .    "
},
{
  "id": "exercise-278",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-278",
  "type": "Exercise",
  "number": "2.5.8.24",
  "title": "",
  "body": " (Remember, and are two different ways to write the same expression.)          Complement         Identity    "
},
{
  "id": "exercise-279",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-279",
  "type": "Exercise",
  "number": "2.5.8.25",
  "title": "",
  "body": "                     Complement          Complement          Identity          Identity    "
},
{
  "id": "exercise-280",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-280",
  "type": "Exercise",
  "number": "2.5.8.26",
  "title": "",
  "body": "                     Identity          Complement          Identity          Complement    "
},
{
  "id": "exercise-281",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-281",
  "type": "Exercise",
  "number": "2.5.8.27",
  "title": "",
  "body": "                     Identity          Complement          Identity    "
},
{
  "id": "exercise-282",
  "level": "2",
  "url": "sec-logic-laws.html#exercise-282",
  "type": "Exercise",
  "number": "2.5.8.28",
  "title": "",
  "body": "                     Idempotent    "
},
{
  "id": "sec-more-logic-laws",
  "level": "1",
  "url": "sec-more-logic-laws.html",
  "type": "Section",
  "number": "2.6",
  "title": "More Laws of Logic",
  "body": " More Laws of Logic   De Morgan's Laws  Consider the following truth table:                          0  0  0  1  1  1  1    0  1  0  1  1  0  1    1  0  0  1  0  1  1    1  1  1  0  0  0  0     From this table we can see that We can construct a similar table to show that These are called De Morgan's Laws . laws of logic De Morgan's laws  De Morgan's laws Constructing the tables using Boolean algebra notation yields similar statements.    De Morgan's Laws        Logic           Boolean             Distributive Laws  In the same way, we can construct truth tables to prove the distributive laws , in both logic and Boolean algebra notation. laws of logic distributive laws  distributive laws Note carefully the forms of these laws.  Distributive Laws        Logic           Boolean         The first of the distributive laws in Boolean notation looks like the usual one from arithmetic with real numbers. The second one, however, looks decidedly unlike any rules from arithmetic. You must not let the familiar rules of arithmetic distract you from the laws of logic.    Absorption Laws  The absorption laws can be verified using truth tables, or by use of the laws of logic already stated. laws of logic absorption laws  absorption laws   Absorption Laws        Logic           Boolean             Summary So Far  Here are all the laws of logic discussed so far: laws of logic summary    Law  Logic  Boolean Algebra    Identity                                        Idempotent                    Complement                              Commutative                    Associative                    De Morgan's                    Distributive                    Absorption                                       The next sub-section contains examples of the usage of these laws.    Simplifying Logical Expressions  logical equivalence using laws of logic  logical proposition simplifying with laws of logic  The clarity of your simplification or of your proof is greatly improved if you use only one law in each line of your work, and also state the law you have used. To help you build good habits, this is required in your coursework. It is not merely a suggestion.   Simplify .               distributive       complement       identity       Simplify .               distributive       commutative       complement       identity       definition of or       Note that for many of these exercises, there is more than one way to answer. Another equally valivd simplification of the statement in the previous example looks like the following:             De Morgan's       complement   This is a much shorter answer, but does require a flash of insight at the pattern.    Proofs  proofs using laws of logic  laws of logic proofs  proposition proofs  When tasked to prove that two logic statements are equivalent, look to see if one of the statements is simpler than the other. Try to simplify the more complicated statement until it is identical to the simpler statement. Sometimes, you will have to simplify both statements into identical forms.   Show that .  Let's examine the left-had side and simplify it.                         absorption             De Morgan's             complement    The left-hand side has been shown to be equivalent to the origintal right-hand side. This completes the proof.     Show that .  The left side is more complicated, so let's examine it to see what simplification is possible.                         commutative             distributive             associative             idempotent             commutative   QED. (QED is short for the Latin phrase quod erat demonstrandum , which means it has been demonstrated .)      Let be the statement Rich is seven feet tall and be Susan has brown hair. Translate the following English sentences into logical notation. Then, use one of the laws of logic to write an equivalent logical expression. Finally, translate your new expression back into an English sentence.   Rich is seven feet tall or he is seven feet tall.  . Rich is seven feet tall.   Susan has brown hair and she has brown hair.  . Susan has brown hair.   Either Rich is not seven feet tall or Susan does not have brown hair.  . It is not the case that Rich is seven feet tall and Susan has brown hair.   It is not true that Rich is seven feet tall and Susan has brown  . Rich is not seven feet tall or Susan does not have brown hair.   It is not true that Rich is seven feet tall or Susan has brown hair.  . Rich is not seven feet tall and Susan does not have brown hair.   Rich is not seven feet tall and Susan does not have brown hair.  . It is not the case that Rich is seven feet tall or Susan has brown hair.   Rich is seven feet tall and Susan has brown hair.  . Susan has brown hair and Rich is seven feet tall.   Susan has brown hair or Rich is seven feet tall.  . Rich is seven feet tall or Susan has brown hair.    Name the law of logic used in the following. note that the variables have changed, but that the law is still valid.    De Morgan's    absorption    distributive    De Morgan's    distributive    absorption    Simplify the given expression, and state the name of the law you used. You should be able to do these in a single step.     , absorption     , idempotent     , distributive     , absorption     , complement     , De Morgan's    For the following exercises, let be The moon is made of green cheese and be The earth is made of green cheese. Translate the following English sentences into logical notation. Then, use one of the laws of logic to write an equivalent logical expression. Finally, translate your new expression back into an English sentence.   Either the moon is made of green cheese or both the moon and the earth are made of green cheese.  . The moon is made of green cheese.   The earth is made of green cheese and either the earth or the moon is made of green cheese.  . The earth is made of green cheese.   Either the earth is made of green cheese while the moon is not, or the moon is made of green cheese.  . (Note: I'm using the commutative laws to rearrange things) The moon or the earth is made of green cheese.   The earth is made of green cheese and either the moon is made of green cheese or the earth is not.  . The earth and the moon are made of green cheese.   Remembering that is exclusive or , show that by using a truth table.                              0  0  0  1  1  0  0  0    0  1  1  1  0  1  0  1    1  0  1  0  1  0  1  1    1  1  0  0  0  0  0  0      The NAND gate (not-AND) has the following truth table. Use DeMorgan's laws to find an equivalent Boolean expression using only OR and NOT, and show that your expression has the same truth table.          NAND     0  0  1    0  1  1    1  0  1    1  1  0    By De Morgan's law,           NAND              0  0  1  1  1  1    0  1  1  1  0  1    1  0  1  0  1  1    1  1  0  0  0  0       Simplify the following Boolean expressions using the laws of logic. If you're stuck, try using a truth table.                                                                          Prove each of the following using the laws of logic. If you're stuck, try using a truth table.                              complement             identity             idempotent                                complement             identity                                distributive             complement             identity                                associative (can skip this step)             absorption                                absorption             associative (can skip)             absorption                                distributive             absorption             distributive                                De Morgan's             distributive             complement             identity                                De Morgan's             complement                                De Morgan's             distributive             idempotent             absorption        Solutions to Exercises.   "
},
{
  "id": "p-241",
  "level": "2",
  "url": "sec-more-logic-laws.html#p-241",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "De Morgan's Laws "
},
{
  "id": "p-246",
  "level": "2",
  "url": "sec-more-logic-laws.html#p-246",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distributive laws "
},
{
  "id": "p-250",
  "level": "2",
  "url": "sec-more-logic-laws.html#p-250",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "absorption laws "
},
{
  "id": "exmpl-simpl-dist1",
  "level": "2",
  "url": "sec-more-logic-laws.html#exmpl-simpl-dist1",
  "type": "Example",
  "number": "2.6.1",
  "title": "",
  "body": " Simplify .               distributive       complement       identity     "
},
{
  "id": "exmpl-simpl-dist2",
  "level": "2",
  "url": "sec-more-logic-laws.html#exmpl-simpl-dist2",
  "type": "Example",
  "number": "2.6.2",
  "title": "",
  "body": " Simplify .               distributive       commutative       complement       identity       definition of or      "
},
{
  "id": "exmpl-proof1",
  "level": "2",
  "url": "sec-more-logic-laws.html#exmpl-proof1",
  "type": "Example",
  "number": "2.6.3",
  "title": "",
  "body": " Show that .  Let's examine the left-had side and simplify it.                         absorption             De Morgan's             complement    The left-hand side has been shown to be equivalent to the origintal right-hand side. This completes the proof.   "
},
{
  "id": "exmpl-proof2",
  "level": "2",
  "url": "sec-more-logic-laws.html#exmpl-proof2",
  "type": "Example",
  "number": "2.6.4",
  "title": "",
  "body": " Show that .  The left side is more complicated, so let's examine it to see what simplification is possible.                         commutative             distributive             associative             idempotent             commutative   QED. (QED is short for the Latin phrase quod erat demonstrandum , which means it has been demonstrated .)  "
},
{
  "id": "exercise-283",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-283",
  "type": "Exercise",
  "number": "2.6.7.1",
  "title": "",
  "body": " Rich is seven feet tall or he is seven feet tall.  . Rich is seven feet tall. "
},
{
  "id": "exercise-284",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-284",
  "type": "Exercise",
  "number": "2.6.7.2",
  "title": "",
  "body": " Susan has brown hair and she has brown hair.  . Susan has brown hair. "
},
{
  "id": "exercise-285",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-285",
  "type": "Exercise",
  "number": "2.6.7.3",
  "title": "",
  "body": " Either Rich is not seven feet tall or Susan does not have brown hair.  . It is not the case that Rich is seven feet tall and Susan has brown hair. "
},
{
  "id": "exercise-286",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-286",
  "type": "Exercise",
  "number": "2.6.7.4",
  "title": "",
  "body": " It is not true that Rich is seven feet tall and Susan has brown  . Rich is not seven feet tall or Susan does not have brown hair. "
},
{
  "id": "exercise-287",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-287",
  "type": "Exercise",
  "number": "2.6.7.5",
  "title": "",
  "body": " It is not true that Rich is seven feet tall or Susan has brown hair.  . Rich is not seven feet tall and Susan does not have brown hair. "
},
{
  "id": "exercise-288",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-288",
  "type": "Exercise",
  "number": "2.6.7.6",
  "title": "",
  "body": " Rich is not seven feet tall and Susan does not have brown hair.  . It is not the case that Rich is seven feet tall or Susan has brown hair. "
},
{
  "id": "exercise-289",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-289",
  "type": "Exercise",
  "number": "2.6.7.7",
  "title": "",
  "body": " Rich is seven feet tall and Susan has brown hair.  . Susan has brown hair and Rich is seven feet tall. "
},
{
  "id": "exercise-290",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-290",
  "type": "Exercise",
  "number": "2.6.7.8",
  "title": "",
  "body": " Susan has brown hair or Rich is seven feet tall.  . Rich is seven feet tall or Susan has brown hair. "
},
{
  "id": "exercise-291",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-291",
  "type": "Exercise",
  "number": "2.6.7.9",
  "title": "",
  "body": "  De Morgan's "
},
{
  "id": "exercise-292",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-292",
  "type": "Exercise",
  "number": "2.6.7.10",
  "title": "",
  "body": "  absorption "
},
{
  "id": "exercise-293",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-293",
  "type": "Exercise",
  "number": "2.6.7.11",
  "title": "",
  "body": "  distributive "
},
{
  "id": "exercise-294",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-294",
  "type": "Exercise",
  "number": "2.6.7.12",
  "title": "",
  "body": "  De Morgan's "
},
{
  "id": "exercise-295",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-295",
  "type": "Exercise",
  "number": "2.6.7.13",
  "title": "",
  "body": "  distributive "
},
{
  "id": "exercise-296",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-296",
  "type": "Exercise",
  "number": "2.6.7.14",
  "title": "",
  "body": "  absorption "
},
{
  "id": "exercise-297",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-297",
  "type": "Exercise",
  "number": "2.6.7.15",
  "title": "",
  "body": "   , absorption "
},
{
  "id": "exercise-298",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-298",
  "type": "Exercise",
  "number": "2.6.7.16",
  "title": "",
  "body": "   , idempotent "
},
{
  "id": "exercise-299",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-299",
  "type": "Exercise",
  "number": "2.6.7.17",
  "title": "",
  "body": "   , distributive "
},
{
  "id": "exercise-300",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-300",
  "type": "Exercise",
  "number": "2.6.7.18",
  "title": "",
  "body": "   , absorption "
},
{
  "id": "exercise-301",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-301",
  "type": "Exercise",
  "number": "2.6.7.19",
  "title": "",
  "body": "   , complement "
},
{
  "id": "exercise-302",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-302",
  "type": "Exercise",
  "number": "2.6.7.20",
  "title": "",
  "body": "   , De Morgan's "
},
{
  "id": "exercise-303",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-303",
  "type": "Exercise",
  "number": "2.6.7.21",
  "title": "",
  "body": " Either the moon is made of green cheese or both the moon and the earth are made of green cheese.  . The moon is made of green cheese. "
},
{
  "id": "exercise-304",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-304",
  "type": "Exercise",
  "number": "2.6.7.22",
  "title": "",
  "body": " The earth is made of green cheese and either the earth or the moon is made of green cheese.  . The earth is made of green cheese. "
},
{
  "id": "exercise-305",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-305",
  "type": "Exercise",
  "number": "2.6.7.23",
  "title": "",
  "body": " Either the earth is made of green cheese while the moon is not, or the moon is made of green cheese.  . (Note: I'm using the commutative laws to rearrange things) The moon or the earth is made of green cheese. "
},
{
  "id": "exercise-306",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-306",
  "type": "Exercise",
  "number": "2.6.7.24",
  "title": "",
  "body": " The earth is made of green cheese and either the moon is made of green cheese or the earth is not.  . The earth and the moon are made of green cheese. "
},
{
  "id": "exercise-307",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-307",
  "type": "Exercise",
  "number": "2.6.7.25",
  "title": "",
  "body": " Remembering that is exclusive or , show that by using a truth table.                              0  0  0  1  1  0  0  0    0  1  1  1  0  1  0  1    1  0  1  0  1  0  1  1    1  1  0  0  0  0  0  0    "
},
{
  "id": "exercise-308",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-308",
  "type": "Exercise",
  "number": "2.6.7.26",
  "title": "",
  "body": " The NAND gate (not-AND) has the following truth table. Use DeMorgan's laws to find an equivalent Boolean expression using only OR and NOT, and show that your expression has the same truth table.          NAND     0  0  1    0  1  1    1  0  1    1  1  0    By De Morgan's law,           NAND              0  0  1  1  1  1    0  1  1  1  0  1    1  0  1  0  1  1    1  1  0  0  0  0    "
},
{
  "id": "exercise-309",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-309",
  "type": "Exercise",
  "number": "2.6.7.27",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-310",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-310",
  "type": "Exercise",
  "number": "2.6.7.28",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-311",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-311",
  "type": "Exercise",
  "number": "2.6.7.29",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-312",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-312",
  "type": "Exercise",
  "number": "2.6.7.30",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-313",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-313",
  "type": "Exercise",
  "number": "2.6.7.31",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-314",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-314",
  "type": "Exercise",
  "number": "2.6.7.32",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-315",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-315",
  "type": "Exercise",
  "number": "2.6.7.33",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-316",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-316",
  "type": "Exercise",
  "number": "2.6.7.34",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-317",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-317",
  "type": "Exercise",
  "number": "2.6.7.35",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-318",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-318",
  "type": "Exercise",
  "number": "2.6.7.36",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-319",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-319",
  "type": "Exercise",
  "number": "2.6.7.37",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-320",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-320",
  "type": "Exercise",
  "number": "2.6.7.38",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-321",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-321",
  "type": "Exercise",
  "number": "2.6.7.39",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-322",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-322",
  "type": "Exercise",
  "number": "2.6.7.40",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-323",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-323",
  "type": "Exercise",
  "number": "2.6.7.41",
  "title": "",
  "body": "                            complement             identity             idempotent    "
},
{
  "id": "exercise-324",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-324",
  "type": "Exercise",
  "number": "2.6.7.42",
  "title": "",
  "body": "                           complement             identity    "
},
{
  "id": "exercise-325",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-325",
  "type": "Exercise",
  "number": "2.6.7.43",
  "title": "",
  "body": "                           distributive             complement             identity    "
},
{
  "id": "exercise-326",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-326",
  "type": "Exercise",
  "number": "2.6.7.44",
  "title": "",
  "body": "                           associative (can skip this step)             absorption    "
},
{
  "id": "exercise-327",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-327",
  "type": "Exercise",
  "number": "2.6.7.45",
  "title": "",
  "body": "                           absorption             associative (can skip)             absorption    "
},
{
  "id": "exercise-328",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-328",
  "type": "Exercise",
  "number": "2.6.7.46",
  "title": "",
  "body": "                           distributive             absorption             distributive    "
},
{
  "id": "exercise-329",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-329",
  "type": "Exercise",
  "number": "2.6.7.47",
  "title": "",
  "body": "                           De Morgan's             distributive             complement             identity    "
},
{
  "id": "exercise-330",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-330",
  "type": "Exercise",
  "number": "2.6.7.48",
  "title": "",
  "body": "                           De Morgan's             complement    "
},
{
  "id": "exercise-331",
  "level": "2",
  "url": "sec-more-logic-laws.html#exercise-331",
  "type": "Exercise",
  "number": "2.6.7.49",
  "title": "",
  "body": "                           De Morgan's             distributive             idempotent             absorption    "
},
{
  "id": "sec-conditional",
  "level": "1",
  "url": "sec-conditional.html",
  "type": "Section",
  "number": "2.7",
  "title": "The Conditional",
  "body": " The Conditional   The Conditional Connective  Suppose we have two propositions, and . Remembering that connectives are operations which join two or more porpositions (like and and or ), the conditional connective is If , then .   In symbols, this is written as , and when red aloud, you say  implies  . conditional  implies  hypothesis  conclusion The first proposition in the conditional is called the hypothesis , and the second is called the conclusion .  There are other ways to state the conditional. The following are equivalent statements:   implies    , if    is sufficient for    is necessary for    only if     We'll be using only the forms if   then  and  implies  in this course.  Experience has shown that the meaning of the conditional is best understood by means of examples. Suppose you have an insurance contract My (PW) thanks go to my colleague Gilles Cazelais for providing the idea for this example. which reads: If your house burns down, then the insurance company will pay you $1000 000. Let us further suppose your house burns down. Under the contract, the unsurance company must give you one million dollars. If it doesn't, then the contract has been violated. But if your house doesn't burn down and the company doesn't give you any money, the contract has not been violated. If your house doesn't burn down and out of boundless generosity the company gives you one million dollars anyway, the contract has not been violated. The only circumstances under which the contract is violated is whn your house does burn down but the company fails to give you one million dollars. This leads to the following truth table.     House burns down?  Company pays you $1000 000  The contract is honoured.    no  no  yes    no  yes  yes    yes  no  no    yes  yes  yes     To generalize to the symbolic propositions and ,              F  F  T    F  T  T    T  F  F    T  T  T     What does this mean? It means that if is true and is false, then the implication cannot also be true. It also means that if is true, then you cannot have true and false at the same time.  Let's look at another example. Suppose that the following conditional is true: If Barney is a dog, then Barney has four legs. This means that if the first proposition, Barney is a dog, is true, then only one conclusion may be reached, that the second is true and Barney has four legs. However, if is false (that is, Barney is not a dog), then our conditional doesn't have anything to say about the number of legs Barney may have. If Barney is a snake, octopus, bug, person, or pond, then Barney may not have four legs. If Barney is cat, giraffe, wooly mammoth, or a table, then Barney may have four legs. Our coditional does not deal with what you may conclude when is false (that is, when Barney is not a dog).  Suppose that the statement If Jason sleeps in, he will be late for class is true. Answer the following questions.  Jason sleeps in. Is he late for class?  Jason does not sleep in. Is he late for class?  Jason is late for class. Did he sleep in?  Jason is not late for class. Did he sleep in?      Yes.  Maybe. Perhaps he ran into traffic or encountered a bear. Remember: the conditional has nothing to say when the first proposition is false.  Maybe. Again, there may be another reason for his lateness.  No.        The Converse  If is true, can we conclude that is also true? The statment is called the converse of the statement . converse Let's use our previous example again:  Original statement: If Barney is a dog, then Barney has four legs.  Converse: If Barney has four legs, then Barney is a dog.    The truth of the original statement does not guarantee that the converse is also true. Suppose Barney is a cat. Then the original statement is still true (it has nothing to say about Barney since Barney is a cat), but the converse is not true. Barney has four legs, but Barney is not a dog.  Here is the truth table for the conditional and the converse:                 F  F  T  T    F  T  T  F    T  F  F  T    T  T  T  T     Here's how to fill in the columns for any logical expression containing the conditional connective ( ). Let's call the propositions first and second so we don't get confused with and . For the conditional statement first second, it will be be true for all cases except when the first is true and the second is false. So for , look for the row in which is true and (rows 2 and 4) is false (rows 1 and 2). Then is true and is false only for row 2. Therefore enter F in the second row, and enter in the remaining rows of the column for . This table shows that the conditional and the converse are not logically equivalent.    The contrapositive  The statement is the contrapositive of . contrapositive Let's consider our example again:  Original statement: If Barney is a dog, then Barney has four legs.  Contrapositive: If Barney does not have four legs, then Barney is not a dog.  We've kind of been assuming that we we commonly think of as four-legged animals actually have all four legs (i.e. no congenital or accidental losses). With that in mind, the contrapositive appears to be equivalent to the original statement. Let's consider the truth table. This time, we'll use 0 instead of F, and 1 instead of T for no other reason than to get used to using both notational systems interchangeably:                       0  0  1  1  1  1    0  1  1  0  1  1    1  0  0  1  0  0    1  1  0  0  1  1     Remember, you enter a 1 unless the first statement is true and the second statement is false. Note that in rows 1 and 3, the first ( ) is true. In rows 3 and 4, the second ( ) is false. So a 0 is entered in the last column in row 3. We already know that the conditional is also false under those conditions. The last two columns of this table are identical, so we see that the conditional and the contrapositive are logically equivalent .  Write the contrapositive for the statement, \"If today is sunny, Jason will work in the garden.\"  To get the contrapositive, negate the first and second statements and then reverse the order. So the contrapositive is \"If Jason is not working in the garden today, then it is not sunny.\"      The inverse  Given the conditional statement , the statement is called the inverse . inverse Once again, let's look at our example:  Original statement: If Barney is a dog, then Barney has four legs.  Inverse: If Barney is not a dog, then Barney does not have four legs.  From this example, we see that the original statement and its inverse are not logically equivalent.  Here is the truth table for the inverse:                       0  0  1  1  1  1    0  1  1  0  1  0    1  0  0  1  0  1    1  1  0  0  1  1     Draw the truth tables for the conditional ( ), the converse ( ), the inverse ( ), and the contrapositive ( ). Identify any logically equivalent statements.  Here is the truth table:                             0  0  1  1  1  1  1  1    0  1  1  0  1  0  0  1    1  0  0  1  0  1  1  0    1  1  0  0  1  1  1  1   Since the 5th and 8th columns are identical, the conditional is logically equivalent to the contrapositive . Since the 6th and 7th columns are identical, the converse is logically equivalent to the inverse.       The or form of the Conditional  The conditional can be rewritten in an alternate form in terms of the basic connectives. conditional or form  or form of conditional Consider the truth table below:                    0  0  1  1  1    0  1  1  1  1    1  0  0  0  0    1  1  0  1  1   This means that If Barney is a dog, then Barney has four legs is logically equivalent to Either Barney is not a dog, or Barney has four legs .  Consider the conditional . Is the converse ( ) logically equivelant to , , , or ?  Here's the truth table:                                0  0  1  1  1  1  0  1  0    0  1  1  0  0  1  1  0  0    1  0  0  1  1  0  0  1  1    1  1  0  0  1  1  0  1  0   As can be seen from the table, the columns for and are identical, so these two expressions are logically equivalent.      De Morgan's Law and the contrapositive  Consider the conditional . The contrapositive would be . Applying De Morgan's Law gives . Notice the change from the and in the conditional to the or in the modified contrapositive. Forgetting to make that change is an easy trap to fall into. De Morgan's laws and contrapositive  contrapositive and De Morgan's laws   Consider the conditional If Jason sleeps in or gets caught in traffic, he will be late for class. What is the contrapositive? Use De Morgan's Law to find your answer.  The conditional here is The contrapositive is then Therefore, the contrapositive is If Jason is not late for class, then he didn't sleep in and he didn't get caught in traffic. The or changes into and , as indicated by De Morgan's Law.       In the following exercises, let denote The movie was popular and denote The movie will make a lot of money. Translate the following propositions into English sentences.    If the movie was popular, then it will make a lot of money. (Or: The movie's popularity implies that it will make a lot of money.)    If the movie was not popular, then it will not make a lot of money.    If the movie did not make a lot of money, then the movie was not popular.    If the movie makes a lot of money, then it is popular.    The movie was not popular or it made a lot of money.    The movie was popular and it did not make a lot of money.    In the following exercises, let denote Jason eats a burger for dinner and denote Jason is too full for dessert. Translate the following sentences into logical symbols.   If Jason eats a burger for dinner, he will be too full for dessert.     If Jason does not eat a burger for dinner, he will not be too full for dessert.     If Jason is too full for dessert, then he ate a burger for dinner.     If Jason is not too full for dessert, then he did not eat a burger for dinner.     If Jason is too full for dessert, then he did not eat a burger for dinner.     Jason being too full for dessert implies that he ate a burger for dinner.     Jason not being too full for dessert implies that he did not eat a burger for dinner.     Jason not eating a berger for dinner implies that he will not be too full for dessert.     Jason eating a burger for dinner implies that he will be too full for dessert.     Either Jason does not eat a burger for dinner of he will be too full for dessert.     Either Jason is not too full for dessert or he ate a burger for dinner.     Either Jason is too full for dessert or he did not eat a burger for dinner.      The following conditional statement is true: If Jason is eaten by nears, he will not finish his marking. Given that, answer the following questions.  Jason is eaten by bears. Did he finish his marking?  Jason is not eaten by bears. Did he finish his marking?  Jason finished his marking. Was he eaten by bears?  Jason did not finish his marking. Was he eaten by bears?     No  Maybe  No  Maybe     The following conditional statement is true: If Rich is asleep, then he is not playing ping-pong. Given that, answer the following questions.  Rich is playing ping-pong. Is he asleep?  Rich is asleep. Is he playing ping-pong?  Rich is not asleep. Is he playing ping-pong?  Rich is not playing ping-pong. Is he asleep?     No  No  Maybe  Maybe     Of course, for the previous questions, I chose situations in which you can use common sense to determine the answer. However, the true test of whether you understand the concept is to replace the above propositions by complete nonsense.   The following conditional statement is true: If ettercaps are green, then toves are slithy. Given that, answer the following questions.  Toves are slithy. Are ettercaps green?  Toves are not slithy. Are ettercaps green?  Ettercaps are green. Are toves slithy?  Ettercaps are red. Are toves slithy?     Maybe  No  Yes  Maybe     The following conditional statement is true: If the hare reads the Times Colonist, the tortoise will take out the recycling. Given that, answer the following questions.  The hare does not read the Times Colonist. Will the tortoise take out the recycling?  The hare reads the Times Colonist. Will the tortoise take out the recycling?  The tortoise takes out the recycling. Does the hare read the Times Colonist?  The tortoise is not taking out the recycling. Does the hare read the Times Colonist?     Maybe  Yes  Maybe  No      Given the conditional statement If the frattling is non-responsive, then the runges must be strunking , write the corresponding English sentences for the following.   The contrapositive ( ) If the runges are not strunking, then the frattling must be responsive.   The converse ( ) If the runges are strunking, then the frattling is non-responsive.   The inverse ( ) If the frattling is responsive, then the runges must not be strunking.   The or form ( ) The frattling is responsive or the runges are strunking.    Given the conditional statement, If Bossy is mooing, she must be a cow, which of the four following statements is the contrapositive ( )?  If Bossy is not a cow, she is not mooing.  If Bossy is a cow, then she is mooing.  If Bossy is mooing, then she must be a cow.  if Bossy is not mooing, then she must not be a cow.    (a)   Given the conditional statement, If Bossy is mooing, she must be a cow, which of the four following statements is the converse ( )?  If Bossy is not a cow, she is not mooing.  If Bossy is a cow, then she is mooing.  If Bossy is mooing, then she must be a cow.  if Bossy is not mooing, then she must not be a cow.    (b)   Given the conditional statement, If Bossy is mooing, she must be a cow, which of the four following statements is also true?  If Bossy is not a cow, she is not mooing.  If Bossy is a cow, then she is mooing.  If Bossy is mooing, then she must be a cow.  if Bossy is not mooing, then she must not be a cow.    (a)   Which of the following is the correct or form form the conditional If Bossy is mooing, then she must be a cow ?  Bossy is a cow or she is not mooing.  Bossy is not a cow or she is not mooing.  Bossy is not a cow or she is mooing.  Bossy is a cow or she is mooing.    (a)   If the statement If Bossy is mooing, then she must be a cow is a true statement, which of the collowing cannot occur?  Bossy is mooing and she is a cow.  Bossy is mooing and she is not a cow.  Bossy is not mooing and she is not a cow.  Bossy is not mooing and she is a cow.    (b)   Consider the following or form statement, Either Superman has a cape or he cannot fly. Which of the following is the correct form of the corresponding conditional?  If Superman does not have a cape, then he cannot fly.  If Superman has a cape, then he can fly.  If Superman can fly, then he has a cape.  If Superman cannot fly, then he doesn't have a cape.    If you let be Superman does not have a cape then (a). If instead you let be Superman cannot fly then (c).   Consider the conditional If John has the flu or misses the bus, he will be late for work. Which of the following is the corresponding contrapositive statement ?  If John is late for work, then he had the flu or missed the bus.  If John is late for work, then he did not have the flu or did not miss the bus.  If John is not late for work, then he did not have the flu or did not miss the bus.  If John is not late for work, then he did not have the flu and did not miss the bus.    (d)   Consider the conditional If Rich doesn't show his work or makes a mistake, then he will not get full credit. Which of the following is the corresponding contrapositive statement ?  If Rich received full credit, then he showed his work and did not make a mistake.  If Rich received full credit, the he showed his work or did not make a mistake.  If Rich did not get full credit, then he didn't show his work and made a mistake.  If Rich did not get full credit, then he didn't show his work or made a mistake.    (a)   Consider the conditional If Jason is late and has not called his wife, she will be worried. Which of the following is the corresponding contrapositive statement ?  If Jason's wife is not worried, then he is not late and did call her.  If Jason's wife is not worried, then he is not late or did call her.  If Jason's wife is worried, then he is late and has not called her.  If Jason's wife is not worried, then he is late and did not call her.    (b)   Consider the conditional If grunkles are circular, then runges are square and triptrops are blue. Which of the following is the corresponding contrapositive statement ?  If runges are not square and triptrops are not blue, then grunkles are not circular.  If runges are not square or triptrops are not blue, then grunkles are circular.  If runges are not square or triptrops are not blue, then grunkles are not circular.  If runges are not square and triptrops are not blue, then grunkles are circular.    (c)    Solutions to Exercises.   "
},
{
  "id": "p-259",
  "level": "2",
  "url": "sec-conditional.html#p-259",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conditional connective "
},
{
  "id": "p-260",
  "level": "2",
  "url": "sec-conditional.html#p-260",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hypothesis conclusion "
},
{
  "id": "exmpl-cond1",
  "level": "2",
  "url": "sec-conditional.html#exmpl-cond1",
  "type": "Example",
  "number": "2.7.1",
  "title": "",
  "body": " Suppose that the statement If Jason sleeps in, he will be late for class is true. Answer the following questions.  Jason sleeps in. Is he late for class?  Jason does not sleep in. Is he late for class?  Jason is late for class. Did he sleep in?  Jason is not late for class. Did he sleep in?      Yes.  Maybe. Perhaps he ran into traffic or encountered a bear. Remember: the conditional has nothing to say when the first proposition is false.  Maybe. Again, there may be another reason for his lateness.  No.    "
},
{
  "id": "p-268",
  "level": "2",
  "url": "sec-conditional.html#p-268",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converse "
},
{
  "id": "p-274",
  "level": "2",
  "url": "sec-conditional.html#p-274",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contrapositive "
},
{
  "id": "exmpl-contra1",
  "level": "2",
  "url": "sec-conditional.html#exmpl-contra1",
  "type": "Example",
  "number": "2.7.2",
  "title": "",
  "body": " Write the contrapositive for the statement, \"If today is sunny, Jason will work in the garden.\"  To get the contrapositive, negate the first and second statements and then reverse the order. So the contrapositive is \"If Jason is not working in the garden today, then it is not sunny.\"  "
},
{
  "id": "p-278",
  "level": "2",
  "url": "sec-conditional.html#p-278",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "exmpl-inv1",
  "level": "2",
  "url": "sec-conditional.html#exmpl-inv1",
  "type": "Example",
  "number": "2.7.3",
  "title": "",
  "body": " Draw the truth tables for the conditional ( ), the converse ( ), the inverse ( ), and the contrapositive ( ). Identify any logically equivalent statements.  Here is the truth table:                             0  0  1  1  1  1  1  1    0  1  1  0  1  0  0  1    1  0  0  1  0  1  1  0    1  1  0  0  1  1  1  1   Since the 5th and 8th columns are identical, the conditional is logically equivalent to the contrapositive . Since the 6th and 7th columns are identical, the converse is logically equivalent to the inverse.   "
},
{
  "id": "exmpl-altcond1",
  "level": "2",
  "url": "sec-conditional.html#exmpl-altcond1",
  "type": "Example",
  "number": "2.7.4",
  "title": "",
  "body": " Consider the conditional . Is the converse ( ) logically equivelant to , , , or ?  Here's the truth table:                                0  0  1  1  1  1  0  1  0    0  1  1  0  0  1  1  0  0    1  0  0  1  1  0  0  1  1    1  1  0  0  1  1  0  1  0   As can be seen from the table, the columns for and are identical, so these two expressions are logically equivalent.  "
},
{
  "id": "exmpl-demorgan-contrap1",
  "level": "2",
  "url": "sec-conditional.html#exmpl-demorgan-contrap1",
  "type": "Example",
  "number": "2.7.5",
  "title": "",
  "body": " Consider the conditional If Jason sleeps in or gets caught in traffic, he will be late for class. What is the contrapositive? Use De Morgan's Law to find your answer.  The conditional here is The contrapositive is then Therefore, the contrapositive is If Jason is not late for class, then he didn't sleep in and he didn't get caught in traffic. The or changes into and , as indicated by De Morgan's Law.  "
},
{
  "id": "exercise-332",
  "level": "2",
  "url": "sec-conditional.html#exercise-332",
  "type": "Exercise",
  "number": "2.7.7.1",
  "title": "",
  "body": "  If the movie was popular, then it will make a lot of money. (Or: The movie's popularity implies that it will make a lot of money.) "
},
{
  "id": "exercise-333",
  "level": "2",
  "url": "sec-conditional.html#exercise-333",
  "type": "Exercise",
  "number": "2.7.7.2",
  "title": "",
  "body": "  If the movie was not popular, then it will not make a lot of money. "
},
{
  "id": "exercise-334",
  "level": "2",
  "url": "sec-conditional.html#exercise-334",
  "type": "Exercise",
  "number": "2.7.7.3",
  "title": "",
  "body": "  If the movie did not make a lot of money, then the movie was not popular. "
},
{
  "id": "exercise-335",
  "level": "2",
  "url": "sec-conditional.html#exercise-335",
  "type": "Exercise",
  "number": "2.7.7.4",
  "title": "",
  "body": "  If the movie makes a lot of money, then it is popular. "
},
{
  "id": "exercise-336",
  "level": "2",
  "url": "sec-conditional.html#exercise-336",
  "type": "Exercise",
  "number": "2.7.7.5",
  "title": "",
  "body": "  The movie was not popular or it made a lot of money. "
},
{
  "id": "exercise-337",
  "level": "2",
  "url": "sec-conditional.html#exercise-337",
  "type": "Exercise",
  "number": "2.7.7.6",
  "title": "",
  "body": "  The movie was popular and it did not make a lot of money. "
},
{
  "id": "exercise-338",
  "level": "2",
  "url": "sec-conditional.html#exercise-338",
  "type": "Exercise",
  "number": "2.7.7.7",
  "title": "",
  "body": " If Jason eats a burger for dinner, he will be too full for dessert.   "
},
{
  "id": "exercise-339",
  "level": "2",
  "url": "sec-conditional.html#exercise-339",
  "type": "Exercise",
  "number": "2.7.7.8",
  "title": "",
  "body": " If Jason does not eat a burger for dinner, he will not be too full for dessert.   "
},
{
  "id": "exercise-340",
  "level": "2",
  "url": "sec-conditional.html#exercise-340",
  "type": "Exercise",
  "number": "2.7.7.9",
  "title": "",
  "body": " If Jason is too full for dessert, then he ate a burger for dinner.   "
},
{
  "id": "exercise-341",
  "level": "2",
  "url": "sec-conditional.html#exercise-341",
  "type": "Exercise",
  "number": "2.7.7.10",
  "title": "",
  "body": " If Jason is not too full for dessert, then he did not eat a burger for dinner.   "
},
{
  "id": "exercise-342",
  "level": "2",
  "url": "sec-conditional.html#exercise-342",
  "type": "Exercise",
  "number": "2.7.7.11",
  "title": "",
  "body": " If Jason is too full for dessert, then he did not eat a burger for dinner.   "
},
{
  "id": "exercise-343",
  "level": "2",
  "url": "sec-conditional.html#exercise-343",
  "type": "Exercise",
  "number": "2.7.7.12",
  "title": "",
  "body": " Jason being too full for dessert implies that he ate a burger for dinner.   "
},
{
  "id": "exercise-344",
  "level": "2",
  "url": "sec-conditional.html#exercise-344",
  "type": "Exercise",
  "number": "2.7.7.13",
  "title": "",
  "body": " Jason not being too full for dessert implies that he did not eat a burger for dinner.   "
},
{
  "id": "exercise-345",
  "level": "2",
  "url": "sec-conditional.html#exercise-345",
  "type": "Exercise",
  "number": "2.7.7.14",
  "title": "",
  "body": " Jason not eating a berger for dinner implies that he will not be too full for dessert.   "
},
{
  "id": "exercise-346",
  "level": "2",
  "url": "sec-conditional.html#exercise-346",
  "type": "Exercise",
  "number": "2.7.7.15",
  "title": "",
  "body": " Jason eating a burger for dinner implies that he will be too full for dessert.   "
},
{
  "id": "exercise-347",
  "level": "2",
  "url": "sec-conditional.html#exercise-347",
  "type": "Exercise",
  "number": "2.7.7.16",
  "title": "",
  "body": " Either Jason does not eat a burger for dinner of he will be too full for dessert.   "
},
{
  "id": "exercise-348",
  "level": "2",
  "url": "sec-conditional.html#exercise-348",
  "type": "Exercise",
  "number": "2.7.7.17",
  "title": "",
  "body": " Either Jason is not too full for dessert or he ate a burger for dinner.   "
},
{
  "id": "exercise-349",
  "level": "2",
  "url": "sec-conditional.html#exercise-349",
  "type": "Exercise",
  "number": "2.7.7.18",
  "title": "",
  "body": " Either Jason is too full for dessert or he did not eat a burger for dinner.   "
},
{
  "id": "exercise-350",
  "level": "2",
  "url": "sec-conditional.html#exercise-350",
  "type": "Exercise",
  "number": "2.7.7.19",
  "title": "",
  "body": " The following conditional statement is true: If Jason is eaten by nears, he will not finish his marking. Given that, answer the following questions.  Jason is eaten by bears. Did he finish his marking?  Jason is not eaten by bears. Did he finish his marking?  Jason finished his marking. Was he eaten by bears?  Jason did not finish his marking. Was he eaten by bears?     No  Maybe  No  Maybe   "
},
{
  "id": "exercise-351",
  "level": "2",
  "url": "sec-conditional.html#exercise-351",
  "type": "Exercise",
  "number": "2.7.7.20",
  "title": "",
  "body": " The following conditional statement is true: If Rich is asleep, then he is not playing ping-pong. Given that, answer the following questions.  Rich is playing ping-pong. Is he asleep?  Rich is asleep. Is he playing ping-pong?  Rich is not asleep. Is he playing ping-pong?  Rich is not playing ping-pong. Is he asleep?     No  No  Maybe  Maybe   "
},
{
  "id": "exercise-352",
  "level": "2",
  "url": "sec-conditional.html#exercise-352",
  "type": "Exercise",
  "number": "2.7.7.21",
  "title": "",
  "body": " The following conditional statement is true: If ettercaps are green, then toves are slithy. Given that, answer the following questions.  Toves are slithy. Are ettercaps green?  Toves are not slithy. Are ettercaps green?  Ettercaps are green. Are toves slithy?  Ettercaps are red. Are toves slithy?     Maybe  No  Yes  Maybe   "
},
{
  "id": "exercise-353",
  "level": "2",
  "url": "sec-conditional.html#exercise-353",
  "type": "Exercise",
  "number": "2.7.7.22",
  "title": "",
  "body": " The following conditional statement is true: If the hare reads the Times Colonist, the tortoise will take out the recycling. Given that, answer the following questions.  The hare does not read the Times Colonist. Will the tortoise take out the recycling?  The hare reads the Times Colonist. Will the tortoise take out the recycling?  The tortoise takes out the recycling. Does the hare read the Times Colonist?  The tortoise is not taking out the recycling. Does the hare read the Times Colonist?     Maybe  Yes  Maybe  No   "
},
{
  "id": "exercise-354",
  "level": "2",
  "url": "sec-conditional.html#exercise-354",
  "type": "Exercise",
  "number": "2.7.7.23",
  "title": "",
  "body": " The contrapositive ( ) If the runges are not strunking, then the frattling must be responsive. "
},
{
  "id": "exercise-355",
  "level": "2",
  "url": "sec-conditional.html#exercise-355",
  "type": "Exercise",
  "number": "2.7.7.24",
  "title": "",
  "body": " The converse ( ) If the runges are strunking, then the frattling is non-responsive. "
},
{
  "id": "exercise-356",
  "level": "2",
  "url": "sec-conditional.html#exercise-356",
  "type": "Exercise",
  "number": "2.7.7.25",
  "title": "",
  "body": " The inverse ( ) If the frattling is responsive, then the runges must not be strunking. "
},
{
  "id": "exercise-357",
  "level": "2",
  "url": "sec-conditional.html#exercise-357",
  "type": "Exercise",
  "number": "2.7.7.26",
  "title": "",
  "body": " The or form ( ) The frattling is responsive or the runges are strunking. "
},
{
  "id": "exercise-358",
  "level": "2",
  "url": "sec-conditional.html#exercise-358",
  "type": "Exercise",
  "number": "2.7.7.27",
  "title": "",
  "body": " Given the conditional statement, If Bossy is mooing, she must be a cow, which of the four following statements is the contrapositive ( )?  If Bossy is not a cow, she is not mooing.  If Bossy is a cow, then she is mooing.  If Bossy is mooing, then she must be a cow.  if Bossy is not mooing, then she must not be a cow.    (a) "
},
{
  "id": "exercise-359",
  "level": "2",
  "url": "sec-conditional.html#exercise-359",
  "type": "Exercise",
  "number": "2.7.7.28",
  "title": "",
  "body": " Given the conditional statement, If Bossy is mooing, she must be a cow, which of the four following statements is the converse ( )?  If Bossy is not a cow, she is not mooing.  If Bossy is a cow, then she is mooing.  If Bossy is mooing, then she must be a cow.  if Bossy is not mooing, then she must not be a cow.    (b) "
},
{
  "id": "exercise-360",
  "level": "2",
  "url": "sec-conditional.html#exercise-360",
  "type": "Exercise",
  "number": "2.7.7.29",
  "title": "",
  "body": " Given the conditional statement, If Bossy is mooing, she must be a cow, which of the four following statements is also true?  If Bossy is not a cow, she is not mooing.  If Bossy is a cow, then she is mooing.  If Bossy is mooing, then she must be a cow.  if Bossy is not mooing, then she must not be a cow.    (a) "
},
{
  "id": "exercise-361",
  "level": "2",
  "url": "sec-conditional.html#exercise-361",
  "type": "Exercise",
  "number": "2.7.7.30",
  "title": "",
  "body": " Which of the following is the correct or form form the conditional If Bossy is mooing, then she must be a cow ?  Bossy is a cow or she is not mooing.  Bossy is not a cow or she is not mooing.  Bossy is not a cow or she is mooing.  Bossy is a cow or she is mooing.    (a) "
},
{
  "id": "exercise-362",
  "level": "2",
  "url": "sec-conditional.html#exercise-362",
  "type": "Exercise",
  "number": "2.7.7.31",
  "title": "",
  "body": " If the statement If Bossy is mooing, then she must be a cow is a true statement, which of the collowing cannot occur?  Bossy is mooing and she is a cow.  Bossy is mooing and she is not a cow.  Bossy is not mooing and she is not a cow.  Bossy is not mooing and she is a cow.    (b) "
},
{
  "id": "exercise-363",
  "level": "2",
  "url": "sec-conditional.html#exercise-363",
  "type": "Exercise",
  "number": "2.7.7.32",
  "title": "",
  "body": " Consider the following or form statement, Either Superman has a cape or he cannot fly. Which of the following is the correct form of the corresponding conditional?  If Superman does not have a cape, then he cannot fly.  If Superman has a cape, then he can fly.  If Superman can fly, then he has a cape.  If Superman cannot fly, then he doesn't have a cape.    If you let be Superman does not have a cape then (a). If instead you let be Superman cannot fly then (c). "
},
{
  "id": "exercise-364",
  "level": "2",
  "url": "sec-conditional.html#exercise-364",
  "type": "Exercise",
  "number": "2.7.7.33",
  "title": "",
  "body": " Consider the conditional If John has the flu or misses the bus, he will be late for work. Which of the following is the corresponding contrapositive statement ?  If John is late for work, then he had the flu or missed the bus.  If John is late for work, then he did not have the flu or did not miss the bus.  If John is not late for work, then he did not have the flu or did not miss the bus.  If John is not late for work, then he did not have the flu and did not miss the bus.    (d) "
},
{
  "id": "exercise-365",
  "level": "2",
  "url": "sec-conditional.html#exercise-365",
  "type": "Exercise",
  "number": "2.7.7.34",
  "title": "",
  "body": " Consider the conditional If Rich doesn't show his work or makes a mistake, then he will not get full credit. Which of the following is the corresponding contrapositive statement ?  If Rich received full credit, then he showed his work and did not make a mistake.  If Rich received full credit, the he showed his work or did not make a mistake.  If Rich did not get full credit, then he didn't show his work and made a mistake.  If Rich did not get full credit, then he didn't show his work or made a mistake.    (a) "
},
{
  "id": "exercise-366",
  "level": "2",
  "url": "sec-conditional.html#exercise-366",
  "type": "Exercise",
  "number": "2.7.7.35",
  "title": "",
  "body": " Consider the conditional If Jason is late and has not called his wife, she will be worried. Which of the following is the corresponding contrapositive statement ?  If Jason's wife is not worried, then he is not late and did call her.  If Jason's wife is not worried, then he is not late or did call her.  If Jason's wife is worried, then he is late and has not called her.  If Jason's wife is not worried, then he is late and did not call her.    (b) "
},
{
  "id": "exercise-367",
  "level": "2",
  "url": "sec-conditional.html#exercise-367",
  "type": "Exercise",
  "number": "2.7.7.36",
  "title": "",
  "body": " Consider the conditional If grunkles are circular, then runges are square and triptrops are blue. Which of the following is the corresponding contrapositive statement ?  If runges are not square and triptrops are not blue, then grunkles are not circular.  If runges are not square or triptrops are not blue, then grunkles are circular.  If runges are not square or triptrops are not blue, then grunkles are not circular.  If runges are not square and triptrops are not blue, then grunkles are circular.    (c) "
},
{
  "id": "sec-biconditional",
  "level": "1",
  "url": "sec-biconditional.html",
  "type": "Section",
  "number": "2.8",
  "title": "The Biconditional",
  "body": " The Biconditional   The Biconditional Connective  Consider the conditional If you live in Victoria, then you live in BC. Remembering that the conditional has nothing to say if the first proposition is false, then it is possible for you to not live in Victoria but to still live in BC. It is also possible to not live in Vicoria and also not live in BC.  Let's now consider the conditional If the temperature outside is below , then it is freezing outside. If I were to use this sentence in everyday English, I probably mean If the temperature outside is below , then it is freezing outide and if the temperature outside is not below , then it is not freezing outside. So we could probably do with a new kind of connective that means If then  and if then . biconditional The new connective is called the biconditional , and is written   Here is the truth table for the biconditional:              0  0  1    0  1  0    1  0  0    1  1  1     So if and have the same truth value, then the biconditional is true and otherwise it is false. (It is the negation of the exclusive or , .)  There are a number of ways to specify the biconditional in English:  If and only if , then .   if and only if .  If , then , and vice versa.  If , then , and if then .  We'll mostly be using the first two in this list.  Draw the truth tables for and . Are they logically equivalent? Also, are and logically equivalent?  Here's the truth table:                                   0  0  1  1  1  1  1  1  1  1    0  1  0  1  0  1  0  0  0  0    1  0  0  0  1  0  1  1  0  0    1  1  1  0  0  1  1  1  1  1   By looking at the relevant columns (3, 9, and 10), we can see that all three of these logical expressions are equivalent. (We might have anticipated this, if we noticed earlier that the converse and the inverse are logically equivalent to each other.)    Consider the following conditional statements.  If two lines are perpendicular, then the angle between them is .  If a polygon is a right triangle, then it has three sides.  Which of these sentences would still be true if it were written in the form of the biconditional?    would still be true since if two lines are not perpendicular, then the angle between them is not .  would not be true since there are many triangles that aren't right triangles.      The following biconditional statement is true: If and only if Jason completes his marking, he will not feel guilty. Given that, answer the following questions:  Jason feels guilty. Did he finish his marking?  Jason does not feel guilty. Did he finish his marking?  Jason finished his marking. Does he feel guilty?  Jason did not finish his marking. Does he feel guilty?    Let Jason finishes his marking and Jason does not feel guilty.   The statement is false, so must also be false (truth of the biconditional requires that both have the same truth value). So Jason did not finish his marking and the answer is no .   is true so is true. Yes.   is true so is true. And since is not guilty the answer is no .   is false so is false. And feeling not not guilty is the same as feeling guilty, so the answer is yes.         Programming Applications  The if-then statement is very common in programming. In pseudocode, it usually takes the form if x > 3 then print \"Hello World\"   When you are debugging, it is tempting to think that this particular code fragment behaves more like the biconditional: if \"Hello World\" was output, was ? It's tempting to think so, but what if \"Hello World\" was printed because of some other command? What then can we conclude about ?  Let's examine this in more detail. Recall that if is true and is true, we cannot conclude anything about . Now consider the following piece of pseudocode: x=4 y=0 if x > 3 then y = 5 print \"y = \", y The output will be \"y=5\".  Will the following pseudocode produce the same output? x=2 y=5 if x > 3 then y=5 print \"y = \",y It will. The conditional statement did not change the value of , but the value was set to 5 initially and so the output will be \"y=5\". Once again, knowing that is true does not allow us to conclude anything about from the conditional . However, if the output was \"y=4\" or any other value not equal to 5, we can draw the conclusion that was not greater than 3. if is true and is false, we know with certainty that is false also.  The if-then-else construction behaves in a similar fashion. Consider the following code fragment: if x > 3 then y = 5 else z = 7 print \"y = \",y,\"z = \",z Only if the output tells you that or will you know with certainty something about .  For special cases, the if-then-else construction can yield more information. Consider the following: if x > 3 then y = 5 else y = 7 print \"y = \",y Since this piece of pseudocode assigns different values (5 or 7) to the same variable , finding out the resulting value of will determine whether was greater than 3. In this special case, the if-then behaves like the biconditional: if then you know that , and if , then .     Write out the truth tables for the following logical expressions. (You might want to do them all in one or two big tables, with columns for each question.)                  0  0  1    0  1  1    1  0  0    1  1  1                           0  0  1  1  1    0  1  1  0  0    1  0  0  1  1    1  1  0  0  1                           0  0  1  1  1    0  1  1  0  1    1  0  0  1  0    1  1  0  0  1                     0  0  1    0  1  0    1  0  1    1  1  1                        0  0  1  1    0  1  1  1    1  0  0  0    1  1  0  1                        0  0  1  0    0  1  0  0    1  0  1  1    1  1  0  0                     0  0  1    0  1  0    1  0  0    1  1  1                           0  0  1  1  1    0  1  1  0  0    1  0  0  1  0    1  1  0  0  1                     0  0  0    0  1  1    1  0  1    1  1  0                        0  0  1  1    0  1  0  0    1  0  1  1    1  1  0  1                           0  0  1  1  0    0  1  1  0  1    1  0  0  1  1    1  1  0  0  0                     0  0  1    0  1  0    1  0  0    1  1  1                     0  0  1    0  1  1    1  0  1    1  1  1                     0  0  1    0  1  0    1  0  0    1  1  1                     0  0  1    0  1  1    1  0  1    1  1  1      Looking at your results for questions 1-15, which expressions are logically equivalent to ? By comparing the results of 1-15, we see that the following expressions are logically equivalent to :           (You may or may not have noticed that it is also equivalent to .)  Looking at your results for questions 1-15, which expressions are logically equivalent to ? By comparing the results of 1-15, we see that the following expressions are logically equivalent to :          Looking at your results for questions 1-15, which expressions are logically equivalent to ? By comparing the results of 1-15, we see that the following expressions are logically equivalent to :           Consider the following conditional statements. Hopefully you agree that each makes a certain amount of sense. However, if they were rewritten as biconditional statements, would they continue to make sense? Answer true or false.  If Barney is a dog, then Barney has four legs. False  If Rich is asleep, then he is not playing ping-pong. False  If Alycia gets 90% or better as her final mark, then she will get an A+. True  If Bossy is mooing, then she is a cow. False  If Pat sleeps in, then she is late for class. False  If Jason does not pay his bill on time, then he will be charged a late fee. True  If Susan bought her computer less than a year ago, her warranty is still in effect. True  If Raymond eats a burger for dinner, they will be too full for dessert. False    In the following exercises, let denote \"Jason eats a burger for dinner\" and let denote \"Jason is too full for dessert.\" Translate the following sentences into symbolic logical statements.  If and only if Jason eats a burger for dinner, he will be too full for dessert.    Jason will not be too full for dessert if and only if he did not eat a burger for dinner.    If Jason eats a burger for dinner, then he will be too full for dessert.    If Jason is not too full for dessert, then he did not eat a burger for dinner.      Are the following two sentences biconditional statements? (In other words, could you replace them by an equivalent ``if and only if'' construction?)  If Frank does not pay his bill on time, then he will be charged a late charge, and if he does pay his bill on time, he will not be charged a late charge. Yes  If Alycia gets 90% or better as her final mark, she will get an A+, and if she gets an A+, then she got 90% or better as her final mark. Yes   If and only if Jason is eaten by bears, he will not finish his marking. Given that, answer the following questions.  Jason is eaten by bears. Did he finish his marking?  Jason is not eaten by bears. Did he finish his marking?  Jason finished his marking. Was he eaten by bears?  Jason did not finish his marking. Whas he eaten by bears?     No  Yes  No  Yes    The following conditional statement is true: If Rich is asleep, then he is not paying ping-pong and vice versa. Given that, answer the following questions.  Rich is playing ping-pong. Is he asleep?  Rich is asleep. Is he playing ping-pong?  Rich is not asleep. Is he playing ping-pong?  Rich is not playing ping-pong. Is he asleep?     No  No  Yes  Yes    The following conditional statement is true: Ettercaps are green if and only if toves are slithy. Given that, answer the following questions.  Toves are slithy. Are ettercaps green?  Toves are not slithy. Are ettercaps green?  Ettercaps are green. Are toves slithy?  Ettercaps are red. Are toves slithy?     Yes  No  Yes  No    If the statement \"If and only if Superman has a cape, then he can fly\" is a true statement, which of the following cannot occur? (You may choose more than one.)  Superman has a cape and he can fly.  Superman has a cape and he cannot fly.  Superman does not have a cape and cannot fly.  Superman does not have a cape and can fly.   (b) and (d)    Solutions to Exercises.   "
},
{
  "id": "p-285",
  "level": "2",
  "url": "sec-biconditional.html#p-285",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "biconditional "
},
{
  "id": "exmpl-bicond1",
  "level": "2",
  "url": "sec-biconditional.html#exmpl-bicond1",
  "type": "Example",
  "number": "2.8.1",
  "title": "",
  "body": " Draw the truth tables for and . Are they logically equivalent? Also, are and logically equivalent?  Here's the truth table:                                   0  0  1  1  1  1  1  1  1  1    0  1  0  1  0  1  0  0  0  0    1  0  0  0  1  0  1  1  0  0    1  1  1  0  0  1  1  1  1  1   By looking at the relevant columns (3, 9, and 10), we can see that all three of these logical expressions are equivalent. (We might have anticipated this, if we noticed earlier that the converse and the inverse are logically equivalent to each other.)  "
},
{
  "id": "exmpl-bicond2",
  "level": "2",
  "url": "sec-biconditional.html#exmpl-bicond2",
  "type": "Example",
  "number": "2.8.2",
  "title": "",
  "body": " Consider the following conditional statements.  If two lines are perpendicular, then the angle between them is .  If a polygon is a right triangle, then it has three sides.  Which of these sentences would still be true if it were written in the form of the biconditional?    would still be true since if two lines are not perpendicular, then the angle between them is not .  would not be true since there are many triangles that aren't right triangles.    "
},
{
  "id": "exmpl-bicond3",
  "level": "2",
  "url": "sec-biconditional.html#exmpl-bicond3",
  "type": "Example",
  "number": "2.8.3",
  "title": "",
  "body": " The following biconditional statement is true: If and only if Jason completes his marking, he will not feel guilty. Given that, answer the following questions:  Jason feels guilty. Did he finish his marking?  Jason does not feel guilty. Did he finish his marking?  Jason finished his marking. Does he feel guilty?  Jason did not finish his marking. Does he feel guilty?    Let Jason finishes his marking and Jason does not feel guilty.   The statement is false, so must also be false (truth of the biconditional requires that both have the same truth value). So Jason did not finish his marking and the answer is no .   is true so is true. Yes.   is true so is true. And since is not guilty the answer is no .   is false so is false. And feeling not not guilty is the same as feeling guilty, so the answer is yes.     "
},
{
  "id": "exercise-368",
  "level": "2",
  "url": "sec-biconditional.html#exercise-368",
  "type": "Exercise",
  "number": "2.8.3.1",
  "title": "",
  "body": "                0  0  1    0  1  1    1  0  0    1  1  1    "
},
{
  "id": "exercise-369",
  "level": "2",
  "url": "sec-biconditional.html#exercise-369",
  "type": "Exercise",
  "number": "2.8.3.2",
  "title": "",
  "body": "                      0  0  1  1  1    0  1  1  0  0    1  0  0  1  1    1  1  0  0  1    "
},
{
  "id": "exercise-370",
  "level": "2",
  "url": "sec-biconditional.html#exercise-370",
  "type": "Exercise",
  "number": "2.8.3.3",
  "title": "",
  "body": "                      0  0  1  1  1    0  1  1  0  1    1  0  0  1  0    1  1  0  0  1    "
},
{
  "id": "exercise-371",
  "level": "2",
  "url": "sec-biconditional.html#exercise-371",
  "type": "Exercise",
  "number": "2.8.3.4",
  "title": "",
  "body": "                0  0  1    0  1  0    1  0  1    1  1  1    "
},
{
  "id": "exercise-372",
  "level": "2",
  "url": "sec-biconditional.html#exercise-372",
  "type": "Exercise",
  "number": "2.8.3.5",
  "title": "",
  "body": "                   0  0  1  1    0  1  1  1    1  0  0  0    1  1  0  1    "
},
{
  "id": "exercise-373",
  "level": "2",
  "url": "sec-biconditional.html#exercise-373",
  "type": "Exercise",
  "number": "2.8.3.6",
  "title": "",
  "body": "                   0  0  1  0    0  1  0  0    1  0  1  1    1  1  0  0    "
},
{
  "id": "exercise-374",
  "level": "2",
  "url": "sec-biconditional.html#exercise-374",
  "type": "Exercise",
  "number": "2.8.3.7",
  "title": "",
  "body": "                0  0  1    0  1  0    1  0  0    1  1  1    "
},
{
  "id": "exercise-375",
  "level": "2",
  "url": "sec-biconditional.html#exercise-375",
  "type": "Exercise",
  "number": "2.8.3.8",
  "title": "",
  "body": "                      0  0  1  1  1    0  1  1  0  0    1  0  0  1  0    1  1  0  0  1    "
},
{
  "id": "exercise-376",
  "level": "2",
  "url": "sec-biconditional.html#exercise-376",
  "type": "Exercise",
  "number": "2.8.3.9",
  "title": "",
  "body": "                0  0  0    0  1  1    1  0  1    1  1  0    "
},
{
  "id": "exercise-377",
  "level": "2",
  "url": "sec-biconditional.html#exercise-377",
  "type": "Exercise",
  "number": "2.8.3.10",
  "title": "",
  "body": "                   0  0  1  1    0  1  0  0    1  0  1  1    1  1  0  1    "
},
{
  "id": "exercise-378",
  "level": "2",
  "url": "sec-biconditional.html#exercise-378",
  "type": "Exercise",
  "number": "2.8.3.11",
  "title": "",
  "body": "                      0  0  1  1  0    0  1  1  0  1    1  0  0  1  1    1  1  0  0  0    "
},
{
  "id": "exercise-379",
  "level": "2",
  "url": "sec-biconditional.html#exercise-379",
  "type": "Exercise",
  "number": "2.8.3.12",
  "title": "",
  "body": "                0  0  1    0  1  0    1  0  0    1  1  1    "
},
{
  "id": "exercise-380",
  "level": "2",
  "url": "sec-biconditional.html#exercise-380",
  "type": "Exercise",
  "number": "2.8.3.13",
  "title": "",
  "body": "                0  0  1    0  1  1    1  0  1    1  1  1    "
},
{
  "id": "exercise-381",
  "level": "2",
  "url": "sec-biconditional.html#exercise-381",
  "type": "Exercise",
  "number": "2.8.3.14",
  "title": "",
  "body": "                0  0  1    0  1  0    1  0  0    1  1  1    "
},
{
  "id": "exercise-382",
  "level": "2",
  "url": "sec-biconditional.html#exercise-382",
  "type": "Exercise",
  "number": "2.8.3.15",
  "title": "",
  "body": "                0  0  1    0  1  1    1  0  1    1  1  1    "
},
{
  "id": "exercise-383",
  "level": "2",
  "url": "sec-biconditional.html#exercise-383",
  "type": "Exercise",
  "number": "2.8.3.16",
  "title": "",
  "body": "Looking at your results for questions 1-15, which expressions are logically equivalent to ? By comparing the results of 1-15, we see that the following expressions are logically equivalent to :           (You may or may not have noticed that it is also equivalent to .) "
},
{
  "id": "exercise-384",
  "level": "2",
  "url": "sec-biconditional.html#exercise-384",
  "type": "Exercise",
  "number": "2.8.3.17",
  "title": "",
  "body": "Looking at your results for questions 1-15, which expressions are logically equivalent to ? By comparing the results of 1-15, we see that the following expressions are logically equivalent to :         "
},
{
  "id": "exercise-385",
  "level": "2",
  "url": "sec-biconditional.html#exercise-385",
  "type": "Exercise",
  "number": "2.8.3.18",
  "title": "",
  "body": "Looking at your results for questions 1-15, which expressions are logically equivalent to ? By comparing the results of 1-15, we see that the following expressions are logically equivalent to :         "
},
{
  "id": "exercise-386",
  "level": "2",
  "url": "sec-biconditional.html#exercise-386",
  "type": "Exercise",
  "number": "2.8.3.19",
  "title": "",
  "body": "If Barney is a dog, then Barney has four legs. False "
},
{
  "id": "exercise-387",
  "level": "2",
  "url": "sec-biconditional.html#exercise-387",
  "type": "Exercise",
  "number": "2.8.3.20",
  "title": "",
  "body": "If Rich is asleep, then he is not playing ping-pong. False "
},
{
  "id": "exercise-388",
  "level": "2",
  "url": "sec-biconditional.html#exercise-388",
  "type": "Exercise",
  "number": "2.8.3.21",
  "title": "",
  "body": "If Alycia gets 90% or better as her final mark, then she will get an A+. True "
},
{
  "id": "exercise-389",
  "level": "2",
  "url": "sec-biconditional.html#exercise-389",
  "type": "Exercise",
  "number": "2.8.3.22",
  "title": "",
  "body": "If Bossy is mooing, then she is a cow. False "
},
{
  "id": "exercise-390",
  "level": "2",
  "url": "sec-biconditional.html#exercise-390",
  "type": "Exercise",
  "number": "2.8.3.23",
  "title": "",
  "body": "If Pat sleeps in, then she is late for class. False "
},
{
  "id": "exercise-391",
  "level": "2",
  "url": "sec-biconditional.html#exercise-391",
  "type": "Exercise",
  "number": "2.8.3.24",
  "title": "",
  "body": "If Jason does not pay his bill on time, then he will be charged a late fee. True "
},
{
  "id": "exercise-392",
  "level": "2",
  "url": "sec-biconditional.html#exercise-392",
  "type": "Exercise",
  "number": "2.8.3.25",
  "title": "",
  "body": "If Susan bought her computer less than a year ago, her warranty is still in effect. True "
},
{
  "id": "exercise-393",
  "level": "2",
  "url": "sec-biconditional.html#exercise-393",
  "type": "Exercise",
  "number": "2.8.3.26",
  "title": "",
  "body": "If Raymond eats a burger for dinner, they will be too full for dessert. False "
},
{
  "id": "exercise-394",
  "level": "2",
  "url": "sec-biconditional.html#exercise-394",
  "type": "Exercise",
  "number": "2.8.3.27",
  "title": "",
  "body": "If and only if Jason eats a burger for dinner, he will be too full for dessert.   "
},
{
  "id": "exercise-395",
  "level": "2",
  "url": "sec-biconditional.html#exercise-395",
  "type": "Exercise",
  "number": "2.8.3.28",
  "title": "",
  "body": "Jason will not be too full for dessert if and only if he did not eat a burger for dinner.   "
},
{
  "id": "exercise-396",
  "level": "2",
  "url": "sec-biconditional.html#exercise-396",
  "type": "Exercise",
  "number": "2.8.3.29",
  "title": "",
  "body": "If Jason eats a burger for dinner, then he will be too full for dessert.   "
},
{
  "id": "exercise-397",
  "level": "2",
  "url": "sec-biconditional.html#exercise-397",
  "type": "Exercise",
  "number": "2.8.3.30",
  "title": "",
  "body": "If Jason is not too full for dessert, then he did not eat a burger for dinner.   "
},
{
  "id": "exercise-398",
  "level": "2",
  "url": "sec-biconditional.html#exercise-398",
  "type": "Exercise",
  "number": "2.8.3.31",
  "title": "",
  "body": "If Frank does not pay his bill on time, then he will be charged a late charge, and if he does pay his bill on time, he will not be charged a late charge. Yes "
},
{
  "id": "exercise-399",
  "level": "2",
  "url": "sec-biconditional.html#exercise-399",
  "type": "Exercise",
  "number": "2.8.3.32",
  "title": "",
  "body": "If Alycia gets 90% or better as her final mark, she will get an A+, and if she gets an A+, then she got 90% or better as her final mark. Yes "
},
{
  "id": "exercise-400",
  "level": "2",
  "url": "sec-biconditional.html#exercise-400",
  "type": "Exercise",
  "number": "2.8.3.33",
  "title": "",
  "body": "If and only if Jason is eaten by bears, he will not finish his marking. Given that, answer the following questions.  Jason is eaten by bears. Did he finish his marking?  Jason is not eaten by bears. Did he finish his marking?  Jason finished his marking. Was he eaten by bears?  Jason did not finish his marking. Whas he eaten by bears?     No  Yes  No  Yes   "
},
{
  "id": "exercise-401",
  "level": "2",
  "url": "sec-biconditional.html#exercise-401",
  "type": "Exercise",
  "number": "2.8.3.34",
  "title": "",
  "body": "The following conditional statement is true: If Rich is asleep, then he is not paying ping-pong and vice versa. Given that, answer the following questions.  Rich is playing ping-pong. Is he asleep?  Rich is asleep. Is he playing ping-pong?  Rich is not asleep. Is he playing ping-pong?  Rich is not playing ping-pong. Is he asleep?     No  No  Yes  Yes   "
},
{
  "id": "exercise-402",
  "level": "2",
  "url": "sec-biconditional.html#exercise-402",
  "type": "Exercise",
  "number": "2.8.3.35",
  "title": "",
  "body": "The following conditional statement is true: Ettercaps are green if and only if toves are slithy. Given that, answer the following questions.  Toves are slithy. Are ettercaps green?  Toves are not slithy. Are ettercaps green?  Ettercaps are green. Are toves slithy?  Ettercaps are red. Are toves slithy?     Yes  No  Yes  No   "
},
{
  "id": "exercise-403",
  "level": "2",
  "url": "sec-biconditional.html#exercise-403",
  "type": "Exercise",
  "number": "2.8.3.36",
  "title": "",
  "body": "If the statement \"If and only if Superman has a cape, then he can fly\" is a true statement, which of the following cannot occur? (You may choose more than one.)  Superman has a cape and he can fly.  Superman has a cape and he cannot fly.  Superman does not have a cape and cannot fly.  Superman does not have a cape and can fly.   (b) and (d) "
},
{
  "id": "sec-intro-to-seq-and-ser",
  "level": "1",
  "url": "sec-intro-to-seq-and-ser.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Sequences and Series",
  "body": " Introduction to Sequences and Series   Sequences  Let's start out with the definition of a sequence:  sequence   A sequence is an ordered list of numbers, often with a pattern.   In a sequence, the number of terms can be finite or infinite. If a sequence is finite, then either the last term or the total number of terms must be specified so that it's clear where the sequence stops.  Which of the following sequences are infinite? Which are finite?             Sequences (b) and (c) are finite, because their last terms are given. Sequence (a), however, goes on forever and so is infinite.    To begin with, let's examine some sequences in detail. We will begin by looking at sequences that do have a pattern.  What is the pattern for the following sequences? What is the next term for the sequence?                     The pattern is that you add 4 to the previous term to get the next term. The next term is then 23.  The pattern is that if you say that ``1'' is the first term and ``4'' is the second term, then will be the term. So the next term after 36 is 49.  The pattern is to divide each term by two (or multiply by one-half) to get the next term. So the term after $1\/16$ will be $1\/32$.  The pattern is to multiply each term by $-2$ to get the next term. The next term is then 48.  The pattern is to subtract 9 from the previous term, so the next one is .      Note that in this previous example, the last two sequences looked very similar for three of their first four terms. However, the third term is different so the pattern for the two sequences is not the same and subsequent terms could look very different.    Notation for Sequences  For each term in a sequence, we will use the notation of a lower-case followed by a subscript which is called the index. sequence notation So, depending on what we want our starting index to be, our sequence can be written as or or even In this textbook, we will use the convention that the starting index is , so our sequences can be written as   Because we are examining sequences from a computing perspective, we should be aware that computing languages don't use a single convention: many start counting at , while others start at . Examples of languages that have a starting index of zero are Python and the C family (C, C++, C#). Languages which start their index values at one include Fortran, Smalltalk, and Lua. There are also languages such as Algol which start at a user-defined value. In this textbook we will simply specify the start value of our index for each sequence instead of using any one convention.    Counting the Terms in a Sequence  Since it's possible to start the index for a sequence at any value, we need to be careful when determining , the total number of terms in a sequence. The rule is: and since we are using the convention that is the first index and is the final index (or, alternatively, some index of interest), then    Starting with Index of One  Let us consider a sequence that starts with an index of one: This convention has the advantage that if you label each term as follows: you can see that the term has an index and is also the fifth term, so the number of the term (fifth) and the index (5) are consistent with each other. This makes it more difficult to make a counting error. Also, the total number of terms in the sequence is given by , so and is consistent with what we would expect. In mathematics, it is most common to start counting with being the first term. Programming languages primarily designed for mathematics, such as Matlab, usually start with an index of one.     Starting with Index of Zero  However, let us now consider sequences that start with zero: Numbering the terms, we find that and is no longer the fifth term. In fact, is the sixth term, which is why it is common in programming to separate the count of a term (first, second, third, etc.) from the index value (0 for , etc.).  Also, the total number of terms in is given by so , the count of the term is no longer equal to , the index of the final term. So be warned: if you are not careful with this convention, you are likely to make a type of mistake which programmers commonly call an off-by-one error.    Starting with Index of Two or More  As we have seen, is only the fifth term in sequences that start with an index of one. If the sequence starts at some other value, then could even be the first or second term. This does lead to a small problem in that the term is commonly called the the term in a sequence , which is only true for a starting index of one. This leads to the awkward convention of calling the zeroth term.      Defining a sequence  There are three ways to define a sequence: sequence defining   List all of the terms, or enough terms to set up the pattern. If the sequence is finite, then either the final term or the total number of terms must be given.  Give a general formula for the term.  Give a recursive formula for the term.    We have already looked at sequences defined using the first method in the examples given earlier. Let's now examine the two types of formula, general and recursive.    General Formula  A general formula is a formula that gives as a function of only. sequence general formula  general formula What this means is that the only variable on the right-hand-side of the general formula is the variable , and all other values in the equations are constants.  Let's look at the following examples to examine some sequences defined in this way.  Give the first four terms of the sequence given by the general formula for .   The first four terms are then 7, 11, 15, and 19. This is the same sequence that was given as part (a) in the first example of this section.    Give all terms of the sequence given by the formula for .  This is a finite sequence, since restrictions have been placed on the values of . The terms are then:     You can see from the previous examples that the general formula allows you to calculate for any value of . The very useful thing about the general formula is that you don't need to know the previous term to calculate a particular term. For instance, if you want to know for the sequence you can determine that the pattern is to add 4 to the previous term to get the next term. However, to get you'd have to calculate first, but requires and so on. But if you instead use the formula for which gives the same sequence, then is just and there's no need to calculate preceding terms. Handy! It's important to note, however, that is not the fiftieth term. Because we are starting our index from zero, is the fifty-first term since .     Recursive Definition  A recursive formula gives a formula for the next term in terms of the previous one. recursive formula  sequence recursive formula For example, in our old friend , the next term is found by adding 4 to the previous term: . However, that's not enough information to uniquely define the series because you don't know where to start. A complete definition must include the first term also. Therefore, the recursive definition for our old friend would be   Recursive definitions, then, must specify the first term (or terms, when necessary) and also the rule which allows you to calculate the next term from the previous term or terms.  Calculate the first four terms of the sequence given by   The first term is already given, . Then So the first four terms are 3, 14, 179, 31694.    Give a recursive formula for the sequence   The pattern is that the next term equals the previous term times three. We can start our index at either 0 or 1, so let's choose 1. Therefore,     Recursive definitions have the same drawback that we've seen before: if we want to know the term, we need to calculate the first, and so on. Only the general formula allows us to calculate each term directly without knowing the previous one.    Fibonacci Sequence  The Fibonacci sequence is likely the most famous example of a recursive sequence: sequence Fibonacci  The pattern can be quite difficult to spot -- you get the next term from the sum of the two previous terms. The recursive formula for this sequence is therefore Here, the first two terms must be given to start off with so that you are then able to calculate the third term from the previous two.    Series  A series is the sum of the terms of a finite or infinite sequence. Here are two examples:        The first example is a finite series, while the second one is infinite. The classification as finite or infinite is based on the number of terms being summed.    Notation for Series  The sum of the first terms of a sequence is denoted by (also sometimes called the partial sum). If the series is finite, it could be the sum of all of the terms. is how we write the sum of an infinite series, like the second example above.  For the series , calculate and .       However, it's easy to see that this method becomes very cumbersome for large values of . We'll develop some more efficient methods for particular types of series in the next two sections.    Sigma Notation  It's easy to take a sequence in list form and transform it into a series by changing all of the commas to plus signs. However, what if you are given the general formula instead? For example, let's take which we know to be for . Since the general form is so useful for finding when is large, it would be nice if we could retain that information while writing our sum.  To do so, we'll introduce a new notation called sigma notation . It uses the Greek letter sigma (the uppercase one): , which is commonly used to mean sum of .  Let's look at an example of sigma notation and discuss what all of the parts mean. Consider the following sum: The letter is an index here, and it runs from the value given at the bottom of the sigma to the number at the top of the sigma in steps of 1. Here, runs from 1 to 5. We are summing, then, the value of for each value of as it runs from 1 to 5:   Let's look at more examples.  Calculate .       Calculate        Calculate .       The tricky thing about the last one is deciding how many terms there are. Recall that you can either write out all of the possible values of the index, or use the useful rule: and as the last example had the index running from 12 to 16, then the number of terms is   Write the following series in sigma notation:   Let's pick our index first. If we want to be lazy, instead of starting our index at 0 or 1, we could start at 2 and our series would be Other acceptable answers would involve changing our starting point for the index to give or or even if 157 happens to be your favourite number.    Write the following sequence in sigma notation:        To write an infinite series in sigma notation, you just replace the final value of the index with .     Predict the next three terms of the following sequnces.     (pattern is to subtract 2)     ( term is equal to )     (multiply by 2)     (divide by 4)     ( term is )     (multiply by )     (add 12)     (denominator increases by 1)    Given a formula for the general term (the term in terms of ) of the following sequences. Use as your starting index.                        Find the first four terms of the following recursively defined sequences.                        In each of the following, the general formula for the term of a sequence is given. Find the first four terms.   for      for      for      for       In each of the following, the general formula for the term of a sequence is given. Calculate the specified terms.  Find for the sequence for     Find for the sequence for     Find for the sequence for     Find for the sequence for       Calculate and for the following series.                        Write out each sum in full and then evaluate.                        Write each series in sigma notation. (Answers may vary.)                        Evil alert! The following questions are just for those wanting a challenge. This type of question will not be tested.  (nasty) Write the sequence using a recursive definition. You could either do or another possibility is   (thorny) Write the sequence using a general formula.  for   (tricksy) Consider the following sequence:   What's the next term in this sequence?  What's the recursive formula for this sequence?     The next term is 200 000.          Solutions to Exercises   "
},
{
  "id": "p-295",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#p-295",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequence "
},
{
  "id": "example-61",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-61",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": " What is the pattern for the following sequences? What is the next term for the sequence?                     The pattern is that you add 4 to the previous term to get the next term. The next term is then 23.  The pattern is that if you say that ``1'' is the first term and ``4'' is the second term, then will be the term. So the next term after 36 is 49.  The pattern is to divide each term by two (or multiply by one-half) to get the next term. So the term after $1\/16$ will be $1\/32$.  The pattern is to multiply each term by $-2$ to get the next term. The next term is then 48.  The pattern is to subtract 9 from the previous term, so the next one is .    "
},
{
  "id": "p-307",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#p-307",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general formula "
},
{
  "id": "example-62",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-62",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": " Give the first four terms of the sequence given by the general formula for .   The first four terms are then 7, 11, 15, and 19. This is the same sequence that was given as part (a) in the first example of this section.  "
},
{
  "id": "example-63",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-63",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": " Give all terms of the sequence given by the formula for .  This is a finite sequence, since restrictions have been placed on the values of . The terms are then:   "
},
{
  "id": "example-64",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-64",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": " Calculate the first four terms of the sequence given by   The first term is already given, . Then So the first four terms are 3, 14, 179, 31694.  "
},
{
  "id": "example-65",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-65",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": " Give a recursive formula for the sequence   The pattern is that the next term equals the previous term times three. We can start our index at either 0 or 1, so let's choose 1. Therefore,   "
},
{
  "id": "example-66",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-66",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": " For the series , calculate and .     "
},
{
  "id": "p-318",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#p-318",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sigma notation "
},
{
  "id": "example-67",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-67",
  "type": "Example",
  "number": "3.1.9",
  "title": "",
  "body": " Calculate .     "
},
{
  "id": "example-68",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-68",
  "type": "Example",
  "number": "3.1.10",
  "title": "",
  "body": " Calculate      "
},
{
  "id": "example-69",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-69",
  "type": "Example",
  "number": "3.1.11",
  "title": "",
  "body": " Calculate .     "
},
{
  "id": "example-70",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-70",
  "type": "Example",
  "number": "3.1.12",
  "title": "",
  "body": " Write the following series in sigma notation:   Let's pick our index first. If we want to be lazy, instead of starting our index at 0 or 1, we could start at 2 and our series would be Other acceptable answers would involve changing our starting point for the index to give or or even if 157 happens to be your favourite number.  "
},
{
  "id": "example-71",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#example-71",
  "type": "Example",
  "number": "3.1.13",
  "title": "",
  "body": " Write the following sequence in sigma notation:      "
},
{
  "id": "exercise-404",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-404",
  "type": "Exercise",
  "number": "3.1.11.1",
  "title": "",
  "body": "   (pattern is to subtract 2) "
},
{
  "id": "exercise-405",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-405",
  "type": "Exercise",
  "number": "3.1.11.2",
  "title": "",
  "body": "   ( term is equal to ) "
},
{
  "id": "exercise-406",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-406",
  "type": "Exercise",
  "number": "3.1.11.3",
  "title": "",
  "body": "   (multiply by 2) "
},
{
  "id": "exercise-407",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-407",
  "type": "Exercise",
  "number": "3.1.11.4",
  "title": "",
  "body": "   (divide by 4) "
},
{
  "id": "exercise-408",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-408",
  "type": "Exercise",
  "number": "3.1.11.5",
  "title": "",
  "body": "   ( term is ) "
},
{
  "id": "exercise-409",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-409",
  "type": "Exercise",
  "number": "3.1.11.6",
  "title": "",
  "body": "   (multiply by ) "
},
{
  "id": "exercise-410",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-410",
  "type": "Exercise",
  "number": "3.1.11.7",
  "title": "",
  "body": "   (add 12) "
},
{
  "id": "exercise-411",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-411",
  "type": "Exercise",
  "number": "3.1.11.8",
  "title": "",
  "body": "   (denominator increases by 1) "
},
{
  "id": "exercise-412",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-412",
  "type": "Exercise",
  "number": "3.1.11.9",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-413",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-413",
  "type": "Exercise",
  "number": "3.1.11.10",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-414",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-414",
  "type": "Exercise",
  "number": "3.1.11.11",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-415",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-415",
  "type": "Exercise",
  "number": "3.1.11.12",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-416",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-416",
  "type": "Exercise",
  "number": "3.1.11.13",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-417",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-417",
  "type": "Exercise",
  "number": "3.1.11.14",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-418",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-418",
  "type": "Exercise",
  "number": "3.1.11.15",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-419",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-419",
  "type": "Exercise",
  "number": "3.1.11.16",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-420",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-420",
  "type": "Exercise",
  "number": "3.1.11.17",
  "title": "",
  "body": " for    "
},
{
  "id": "exercise-421",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-421",
  "type": "Exercise",
  "number": "3.1.11.18",
  "title": "",
  "body": " for    "
},
{
  "id": "exercise-422",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-422",
  "type": "Exercise",
  "number": "3.1.11.19",
  "title": "",
  "body": " for    "
},
{
  "id": "exercise-423",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-423",
  "type": "Exercise",
  "number": "3.1.11.20",
  "title": "",
  "body": " for    "
},
{
  "id": "exercise-424",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-424",
  "type": "Exercise",
  "number": "3.1.11.21",
  "title": "",
  "body": "Find for the sequence for    "
},
{
  "id": "exercise-425",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-425",
  "type": "Exercise",
  "number": "3.1.11.22",
  "title": "",
  "body": "Find for the sequence for    "
},
{
  "id": "exercise-426",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-426",
  "type": "Exercise",
  "number": "3.1.11.23",
  "title": "",
  "body": "Find for the sequence for    "
},
{
  "id": "exercise-427",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-427",
  "type": "Exercise",
  "number": "3.1.11.24",
  "title": "",
  "body": "Find for the sequence for    "
},
{
  "id": "exercise-428",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-428",
  "type": "Exercise",
  "number": "3.1.11.25",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-429",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-429",
  "type": "Exercise",
  "number": "3.1.11.26",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-430",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-430",
  "type": "Exercise",
  "number": "3.1.11.27",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-431",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-431",
  "type": "Exercise",
  "number": "3.1.11.28",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-432",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-432",
  "type": "Exercise",
  "number": "3.1.11.29",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-433",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-433",
  "type": "Exercise",
  "number": "3.1.11.30",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-434",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-434",
  "type": "Exercise",
  "number": "3.1.11.31",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-435",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-435",
  "type": "Exercise",
  "number": "3.1.11.32",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-436",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-436",
  "type": "Exercise",
  "number": "3.1.11.33",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-437",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-437",
  "type": "Exercise",
  "number": "3.1.11.34",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-438",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-438",
  "type": "Exercise",
  "number": "3.1.11.35",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-439",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-439",
  "type": "Exercise",
  "number": "3.1.11.36",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-440",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-440",
  "type": "Exercise",
  "number": "3.1.11.37",
  "title": "",
  "body": "(nasty) Write the sequence using a recursive definition. You could either do or another possibility is  "
},
{
  "id": "exercise-441",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-441",
  "type": "Exercise",
  "number": "3.1.11.38",
  "title": "",
  "body": "(thorny) Write the sequence using a general formula.  for  "
},
{
  "id": "exercise-442",
  "level": "2",
  "url": "sec-intro-to-seq-and-ser.html#exercise-442",
  "type": "Exercise",
  "number": "3.1.11.39",
  "title": "",
  "body": "(tricksy) Consider the following sequence:   What's the next term in this sequence?  What's the recursive formula for this sequence?     The next term is 200 000.      "
},
{
  "id": "sec-arith-seq-ser",
  "level": "1",
  "url": "sec-arith-seq-ser.html",
  "type": "Section",
  "number": "3.2",
  "title": "Arithmetic Sequences and Series",
  "body": " Arithmetic Sequences and Series   Arithmetic Sequences  Let's start out with a definition: An arithmetic sequence is a sequence in which the next term is found by adding a constant (the common difference  ) to the previous term.   Here are some examples of arithmetic sequences:           The first one has a common difference of 4, the second , and the third 0.3. Note that in each of them, we can find the common difference by taking any term and subtracting the previous term from it.  For the following sequences, state whether each of them is arithmetic.                  Yes, because the common difference is .  No, because you're not adding the same number each time.  No, because you're multiplying by 2 to get the next term, not adding.  No, because the difference between each pair of terms is different.      Again, you can define an arithmetic sequence in one of three ways: by listing the terms, by giving a recursive definition, or by giving a general definition.    Recursive Definitions for Arithmetic Sequences  Let's first look at an example:  Give a recursive definition for the sequence .  Recall that a recursive definition has two parts: listing the first term and giving the pattern. In this case, the pattern is adding to the previous term to get the next term. We can start our index anywhere, so let's choose zero for this example. The recursive definition is therefore     To generalize, the recursive formula for any arithmetic sequence is     General Formulae for Arithmetic Sequences  Let's examine the previous example in more detail to see if we can recognize any patterns and come up with a general formula. Rewriting each term, we get   So the term equals the first plus 8 times 2, the term equals the first plus 8 times 3, and the term will equal the first plus 8 times . In other words, and so we find for this particular sequence, , which simplifies to .  We can generalize this formula: the term will equal the first plus times , so for any arithmetic sequence .  Write a general formula for the sequence .  This sequence is arithmetic with the first term 3 and common difference 5. Let's use a starting index of zero. The general formula is then for .    What is the term in the sequence in the sequence ?  This is the same sequence from the previous example. We may then use the formula we derived, for . But we do have to be careful about our index . Recalling that the number of terms is given by where we used as our starting index, then and so the term will be . The term is 248.    What is the common difference in the arithmetic sequence in which the first term is 18 and the twelfth term is ?  The easiest way to count these terms correctly is to have a starting index of one, and then the first term is and the twelfth term is . The common difference is .    Which term has a value of 404 in the sequence ?  Let's use a starting index of one. So is and is . Then we want to find the value of for which equals 404. The fiftieth term is 404.      Arithmetic Series  Recall that is the sum of the first terms of a series. Let's look at a couple of examples of arithmetic series to see if we can identify any patterns.  Suppose we wish to take some partial sums of the series . Let's first calculate . We could just find the first six terms and add them up, but notice the following: The sum of the first and last numbers is 44. The sum of the second and second-to-last is also 44. So is the sum of the third and third-last. So when you take the terms in pairs, each pair has the same sum, , and there are pairs in total. Then What if, however, there are an odd number of terms? Let's also calculate : The sum of the first and last is 52, as is the sum of the each inner pair . Notice that the middle, unpaired value, is of 52. So in a sense, the middle term is of a pair, for a total of pairs. But that's just , which is our in the original formula! So we're still good. The relationship still works, for both odd and even values of .  Generalizing, we find that where can be even or odd and   Find the sum of the first forty terms of the series .  This is just the same sequence as before, with first term and common difference . In order to use our previous formula, however, we need to calculate the last term . If we start with an index of one, then the fortieth term will be , and we will need that value to calculate . So, The sum of the first forty terms is 6320. (Much easier than writing out the first forty terms and adding them up!)    In the previous example, we used the formula for to calculate the last term and put its value into the formula for . We could do that in a more general way: The last expression, which gives as a function of the first term, the number of terms, and the common difference, can also be used to evaluate series.  Find the sum of the first one hundred terms of the sequence .  This sum will just be , with , , and . If we start our index at one, then and we can substitute this into the equation for :     Calculate .   The first term will be for and will equal . Next is and will equal , equaling , and so on. The last term will be for and will equal .  In other words, our series is . Is it arithmetic? Yes, with common difference .  What else do we need for our calculation? The number of terms is Then      Pat the math instructor asks her students to do five word problems the first week, six the second week, seven the third week, and so on, increasing the number of word problems each week by one.  How many word problems will diligent students be doing in the last week of classes (the week)?  How many word problems will diligent students have completed during the course of the term (11 weeks)?      The number of word problems is a sequence: . In fact, it's an arithmetic sequence with and . If we start our counting from one, then in the eleventh week, Diligent students will solve 15 word problems in the last week of classes.  The total number of word problems solved is   Diligent students will have solved 110 word problems in total.      Summary  For an arithmetic sequence , the nth term is given by For an arithmetic series , the sum of the first terms ( partial sum) is or where and .     State whether the following sequences are arithmetic or not. If they are, state the first term and common difference.    not arithmetic    yes,     no    no    yes,     yes,     Give both the general formula and the recursive formula for the term of the following arithmetic sequences. Assume that the first term of the sequence is . For the general formula, be sure to simplify your answer.     and      and      and      and     For the following arithmetic sequences, calculate and , assuming that the first term is .     , so and      , so and     State whether the following recursively defined sequences are arithmetic or not. (Is there an easy way to tell?)    first four terms are , so arithmetic with     first four terms are , so not arithmetic    first four terms are , so arithmetic with     first four terms are , so arithmetic with     first four terms are , so not arithmetic    first four terms are , so not arithmetic   For the following sequence, calculate the term:   , so   For the following sequence, which term equals 137?   , so   What is the common difference for the arithmetic sequence with and     Calculate the first term for the arithmetic sequence with common difference 7 whose sixteenth term is 102.    Calculate the first four terms of the arithmetic sequence in which the sixth term is 17 and the sixtieth term is 179.  and , so the first four terms are   Calculate the first four terms of the arithmetic sequence in which the one hundredth term is 403 and the sixty-fourth term is 259.  and , so the first four terms are   Give a general formula for the arithmetic sequence in which the twentieth term is and the thirty-fifth term is .    Give a recursive formula for the arithmetic sequence in which the eleventh term is 44 and the fifty-second term is 290.    Calculate for the series     Evaluate the series .    Evaluate the series .    Calculate for the series     Calculate the sum of the odd numbers between 100 and 500.    Find the sum of the natural numbers from 50 to 125, inclusive.     Calculate the following sums.                       In a supermarket display, there are 37 cans in the bottom layer, 35 in the next layer up, 33 in the next, and so on. How many layers are there if there are 7 cans in the top row?    In the previous problem, how many cans are there altogether?    In an old-fashioned theatre, there are 25 seats in the first row, 26 in the next, 27 in the one after, and so on. If there are 20 rows in total, how many seats are there altogether?      Solutions to Exercises   "
},
{
  "id": "p-323",
  "level": "2",
  "url": "sec-arith-seq-ser.html#p-323",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arithmetic sequence "
},
{
  "id": "example-72",
  "level": "2",
  "url": "sec-arith-seq-ser.html#example-72",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": " For the following sequences, state whether each of them is arithmetic.                  Yes, because the common difference is .  No, because you're not adding the same number each time.  No, because you're multiplying by 2 to get the next term, not adding.  No, because the difference between each pair of terms is different.    "
},
{
  "id": "example-73",
  "level": "2",
  "url": "sec-arith-seq-ser.html#example-73",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": " Give a recursive definition for the sequence .  Recall that a recursive definition has two parts: listing the first term and giving the pattern. In this case, the pattern is adding to the previous term to get the next term. We can start our index anywhere, so let's choose zero for this example. The recursive definition is therefore   "
},
{
  "id": "example-74",
  "level": "2",
  "url": "sec-arith-seq-ser.html#example-74",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": " Write a general formula for the sequence .  This sequence is arithmetic with the first term 3 and common difference 5. Let's use a starting index of zero. The general formula is then for .  "
},
{
  "id": "example-75",
  "level": "2",
  "url": "sec-arith-seq-ser.html#example-75",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": " What is the term in the sequence in the sequence ?  This is the same sequence from the previous example. We may then use the formula we derived, for . But we do have to be careful about our index . Recalling that the number of terms is given by where we used as our starting index, then and so the term will be . The term is 248.  "
},
{
  "id": "example-76",
  "level": "2",
  "url": "sec-arith-seq-ser.html#example-76",
  "type": "Example",
  "number": "3.2.6",
  "title": "",
  "body": " What is the common difference in the arithmetic sequence in which the first term is 18 and the twelfth term is ?  The easiest way to count these terms correctly is to have a starting index of one, and then the first term is and the twelfth term is . The common difference is .  "
},
{
  "id": "example-77",
  "level": "2",
  "url": "sec-arith-seq-ser.html#example-77",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": " Which term has a value of 404 in the sequence ?  Let's use a starting index of one. So is and is . Then we want to find the value of for which equals 404. The fiftieth term is 404.  "
},
{
  "id": "example-78",
  "level": "2",
  "url": "sec-arith-seq-ser.html#example-78",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": " Find the sum of the first forty terms of the series .  This is just the same sequence as before, with first term and common difference . In order to use our previous formula, however, we need to calculate the last term . If we start with an index of one, then the fortieth term will be , and we will need that value to calculate . So, The sum of the first forty terms is 6320. (Much easier than writing out the first forty terms and adding them up!)  "
},
{
  "id": "example-79",
  "level": "2",
  "url": "sec-arith-seq-ser.html#example-79",
  "type": "Example",
  "number": "3.2.9",
  "title": "",
  "body": " Find the sum of the first one hundred terms of the sequence .  This sum will just be , with , , and . If we start our index at one, then and we can substitute this into the equation for :   "
},
{
  "id": "example-80",
  "level": "2",
  "url": "sec-arith-seq-ser.html#example-80",
  "type": "Example",
  "number": "3.2.10",
  "title": "",
  "body": " Calculate .   The first term will be for and will equal . Next is and will equal , equaling , and so on. The last term will be for and will equal .  In other words, our series is . Is it arithmetic? Yes, with common difference .  What else do we need for our calculation? The number of terms is Then    "
},
{
  "id": "example-81",
  "level": "2",
  "url": "sec-arith-seq-ser.html#example-81",
  "type": "Example",
  "number": "3.2.11",
  "title": "",
  "body": " Pat the math instructor asks her students to do five word problems the first week, six the second week, seven the third week, and so on, increasing the number of word problems each week by one.  How many word problems will diligent students be doing in the last week of classes (the week)?  How many word problems will diligent students have completed during the course of the term (11 weeks)?      The number of word problems is a sequence: . In fact, it's an arithmetic sequence with and . If we start our counting from one, then in the eleventh week, Diligent students will solve 15 word problems in the last week of classes.  The total number of word problems solved is   Diligent students will have solved 110 word problems in total.  "
},
{
  "id": "exercise-443",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-443",
  "type": "Exercise",
  "number": "3.2.6.1",
  "title": "",
  "body": "  not arithmetic "
},
{
  "id": "exercise-444",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-444",
  "type": "Exercise",
  "number": "3.2.6.2",
  "title": "",
  "body": "  yes,  "
},
{
  "id": "exercise-445",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-445",
  "type": "Exercise",
  "number": "3.2.6.3",
  "title": "",
  "body": "  no "
},
{
  "id": "exercise-446",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-446",
  "type": "Exercise",
  "number": "3.2.6.4",
  "title": "",
  "body": "  no "
},
{
  "id": "exercise-447",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-447",
  "type": "Exercise",
  "number": "3.2.6.5",
  "title": "",
  "body": "  yes,  "
},
{
  "id": "exercise-448",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-448",
  "type": "Exercise",
  "number": "3.2.6.6",
  "title": "",
  "body": "  yes,  "
},
{
  "id": "exercise-449",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-449",
  "type": "Exercise",
  "number": "3.2.6.7",
  "title": "",
  "body": "   and  "
},
{
  "id": "exercise-450",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-450",
  "type": "Exercise",
  "number": "3.2.6.8",
  "title": "",
  "body": "   and  "
},
{
  "id": "exercise-451",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-451",
  "type": "Exercise",
  "number": "3.2.6.9",
  "title": "",
  "body": "   and  "
},
{
  "id": "exercise-452",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-452",
  "type": "Exercise",
  "number": "3.2.6.10",
  "title": "",
  "body": "   and  "
},
{
  "id": "exercise-453",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-453",
  "type": "Exercise",
  "number": "3.2.6.11",
  "title": "",
  "body": "   , so and  "
},
{
  "id": "exercise-454",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-454",
  "type": "Exercise",
  "number": "3.2.6.12",
  "title": "",
  "body": "   , so and  "
},
{
  "id": "exercise-455",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-455",
  "type": "Exercise",
  "number": "3.2.6.13",
  "title": "",
  "body": "  first four terms are , so arithmetic with  "
},
{
  "id": "exercise-456",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-456",
  "type": "Exercise",
  "number": "3.2.6.14",
  "title": "",
  "body": "  first four terms are , so not arithmetic "
},
{
  "id": "exercise-457",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-457",
  "type": "Exercise",
  "number": "3.2.6.15",
  "title": "",
  "body": "  first four terms are , so arithmetic with  "
},
{
  "id": "exercise-458",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-458",
  "type": "Exercise",
  "number": "3.2.6.16",
  "title": "",
  "body": "  first four terms are , so arithmetic with  "
},
{
  "id": "exercise-459",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-459",
  "type": "Exercise",
  "number": "3.2.6.17",
  "title": "",
  "body": "  first four terms are , so not arithmetic "
},
{
  "id": "exercise-460",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-460",
  "type": "Exercise",
  "number": "3.2.6.18",
  "title": "",
  "body": "  first four terms are , so not arithmetic "
},
{
  "id": "exercise-461",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-461",
  "type": "Exercise",
  "number": "3.2.6.19",
  "title": "",
  "body": "For the following sequence, calculate the term:   , so  "
},
{
  "id": "exercise-462",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-462",
  "type": "Exercise",
  "number": "3.2.6.20",
  "title": "",
  "body": "For the following sequence, which term equals 137?   , so  "
},
{
  "id": "exercise-463",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-463",
  "type": "Exercise",
  "number": "3.2.6.21",
  "title": "",
  "body": "What is the common difference for the arithmetic sequence with and    "
},
{
  "id": "exercise-464",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-464",
  "type": "Exercise",
  "number": "3.2.6.22",
  "title": "",
  "body": "Calculate the first term for the arithmetic sequence with common difference 7 whose sixteenth term is 102.   "
},
{
  "id": "exercise-465",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-465",
  "type": "Exercise",
  "number": "3.2.6.23",
  "title": "",
  "body": "Calculate the first four terms of the arithmetic sequence in which the sixth term is 17 and the sixtieth term is 179.  and , so the first four terms are  "
},
{
  "id": "exercise-466",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-466",
  "type": "Exercise",
  "number": "3.2.6.24",
  "title": "",
  "body": "Calculate the first four terms of the arithmetic sequence in which the one hundredth term is 403 and the sixty-fourth term is 259.  and , so the first four terms are  "
},
{
  "id": "exercise-467",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-467",
  "type": "Exercise",
  "number": "3.2.6.25",
  "title": "",
  "body": "Give a general formula for the arithmetic sequence in which the twentieth term is and the thirty-fifth term is .   "
},
{
  "id": "exercise-468",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-468",
  "type": "Exercise",
  "number": "3.2.6.26",
  "title": "",
  "body": "Give a recursive formula for the arithmetic sequence in which the eleventh term is 44 and the fifty-second term is 290.   "
},
{
  "id": "exercise-469",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-469",
  "type": "Exercise",
  "number": "3.2.6.27",
  "title": "",
  "body": "Calculate for the series    "
},
{
  "id": "exercise-470",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-470",
  "type": "Exercise",
  "number": "3.2.6.28",
  "title": "",
  "body": "Evaluate the series .   "
},
{
  "id": "exercise-471",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-471",
  "type": "Exercise",
  "number": "3.2.6.29",
  "title": "",
  "body": "Evaluate the series .   "
},
{
  "id": "exercise-472",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-472",
  "type": "Exercise",
  "number": "3.2.6.30",
  "title": "",
  "body": "Calculate for the series    "
},
{
  "id": "exercise-473",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-473",
  "type": "Exercise",
  "number": "3.2.6.31",
  "title": "",
  "body": "Calculate the sum of the odd numbers between 100 and 500.   "
},
{
  "id": "exercise-474",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-474",
  "type": "Exercise",
  "number": "3.2.6.32",
  "title": "",
  "body": "Find the sum of the natural numbers from 50 to 125, inclusive.   "
},
{
  "id": "exercise-475",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-475",
  "type": "Exercise",
  "number": "3.2.6.33",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-476",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-476",
  "type": "Exercise",
  "number": "3.2.6.34",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-477",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-477",
  "type": "Exercise",
  "number": "3.2.6.35",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-478",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-478",
  "type": "Exercise",
  "number": "3.2.6.36",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-479",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-479",
  "type": "Exercise",
  "number": "3.2.6.37",
  "title": "",
  "body": "In a supermarket display, there are 37 cans in the bottom layer, 35 in the next layer up, 33 in the next, and so on. How many layers are there if there are 7 cans in the top row?   "
},
{
  "id": "exercise-480",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-480",
  "type": "Exercise",
  "number": "3.2.6.38",
  "title": "",
  "body": "In the previous problem, how many cans are there altogether?   "
},
{
  "id": "exercise-481",
  "level": "2",
  "url": "sec-arith-seq-ser.html#exercise-481",
  "type": "Exercise",
  "number": "3.2.6.39",
  "title": "",
  "body": "In an old-fashioned theatre, there are 25 seats in the first row, 26 in the next, 27 in the one after, and so on. If there are 20 rows in total, how many seats are there altogether?   "
},
{
  "id": "sec-geom-seq-ser",
  "level": "1",
  "url": "sec-geom-seq-ser.html",
  "type": "Section",
  "number": "3.3",
  "title": "Geometric Sequences and Series",
  "body": " Geometric Sequences and Series   Geometric Sequences  Let's start out with a definition: A geometric sequence is a sequence in which the next term is found by multiplying the previous term by a constant (the common ratio  )   Here are some examples of geometric sequences:                   The common ratios of each of these sequences, in order from a) to e), is , , , , , respectively. Note that in each of them, we can find the common ratio by taking term and dividing it by the previous term.  Like any other sequences, geometric sequences can be finite or infinite. Example c) above is finite, as the last term is specified. The others are infinite sequences.  For each of the following sequences, state whether it is arithmetic, geometric, or neither.                  Geometric, because the common ratio is   Arithmetic, because the common difference is .  Neither, because there isn't either a common difference or ratio between terms. (In fact, the pattern is that for .)  Geometric, because the common ratio is .      Again, you can define a geometric sequence in one of three ways: by listing the terms, by giving a recursive definition, or by giving a general definition.    Recursive Definitions for Geometric Sequences  Let's look at an example.  Give a recursive definition for the sequence   Recall that a recursive definition has two parts: listing the first term and giving the pattern. In this case, the pattern is multiplying the previous term by to get the next term. Let's use 0 as our starting index. The recursive definition is therefore     Generally, the recursive definition for any geometric sequence is     General Formulae for Geometric Sequences  Let's examine the previous example in more detail to see if we can recognize any patterns and come up with a general formula. Rewriting each term, we get So the term equals the first times 5 squared, the term equals the first times 5 cubed, and the term will equal the first times 5 raised to the power. In general, for sequences with first term , the term equals the first term times raised to the power, namely for all geometric sequences.  Write a general formula for the sequence   This sequence is geometric with the first term 3 and common ratio 2. If we choose for our first term, then The general formula is then for .    What is the term in the sequence in the sequence ?  This is the same sequence from the previous example. We may then use the formula we derived above with . The term is 1,572,864, which provides a nice example for how fast geometric sequences can grow, even for small values of .    Write a general formula for the sequence What is the fifteenth term in this sequence? The fiftieth?  If we start our counting at , then the fifteenth term is and the fiftieth term is . So the general formula is for and the fifteenth and fiftieth terms are approximately 2335.43 and , respectively.      Geometric Series  Recall that is the sum of the first terms of a series. Let's look at how a formula for is derived, using a series that starts with . Let's take that last expression for and multiply it by to get Then if we add the rows for and , we get since all of the terms in between these two ( and ) combine pair-wise to zero by subtraction. Then and so To generalize, the formula for the sum of the first terms for any geometric series that starts with first term is   Find the sum of the first 20 terms of the series   This is a geometric series with and . We want to find . The sum of the first 20 terms is 3,145,725.    Find the sum of the first forty terms of the series .  This is a geometric series with and . We want to find . The sum of the first forty terms is approximately .      Sum of an Infinite Geometric Series  Let's take a look at the infinite series What happens when we try to evaluate this sum using the formula? We can put , , but can we put into the formula? It is important to note that is not a number . Instead, it is a symbol that represents the characteristic of being unbounded, or going on forever .  Let's take a closer look at the behaviour of for large values of . As gets larger, the fraction gets ever smaller. In fact, as grows without bound (sometimes written ), will approach zero.  This is true for any provided that . (If you're not familiar with the absolute value bars, an equivalent expression is that .)  Recalling that and letting the term go to zero, then for any infinite geometric series with the first term, provided that meets the restriction above.  Let's now revisit the series that started this discussion and evaluate it in the following example.  Evaluate   This series is geometric with and . Then The sum of this series is 1.    Evaluate   This series is geometric with and .     Evaluate   This series is identical to the previous one except that is now negative: and .     Evaluate .  This series is geometric with and . You may already realize what's going on, but in case you don't, let's naively put the values into the formula and see what we get: Wait! How can the sum of a bunch of positive number be negative? The answer is that our restriction for is that it must be between and 1, but . Because does not satisfy the restriction, we cannot use the above formula for . Indeed, if you add up a bunch of positive numbers that are increasing as you go up, you can see that the sum just keeps getting bigger as we add more terms. You could then either say that the sum is infinite or does not exist . These two statements are not quite equivalent. While it is correct to say that the sum does not exist , it is more descriptive to state that the sum is infinite (or to write ). There could be a sum that grows without bound in the negative direction , in which case it would be more descriptive to write than simply to say that the sum does not exist.    Let's look at three specific cases:           Each term in (a) is getting more positive, so the sum of that sequence does not exist but writing is more descriptive. Each term in (b) is getting more and more negative, so the sum of that sequence does not exist, but writing is more descriptive. But in the last case, the sum oscillates back and forth: , , , , and so on. The sign of is either positive or negative depending on whether the number of terms you've added is even or odd. In this case, all we can say is that the sum does not exist.  Evaluate .  The best place to start is to figure out the first few terms to determine the pattern: so our sequence is This is geometric with and . Then     Evaluate .  As in the previous example, let's figure out the first few terms to determine the pattern: so our sequence is . Wait! This sequence is arithmetic! Not only that, but the numbers are increasing. So the sum of the series does not exist due to unbounded growth in the positive direction. You can write does not exist or, if you prefer, the more descriptive .      Repeating Decimals  Let's examine in some detail to see what we find: But this is just the sum of an infinite series with and . Rewriting and in fraction form (you'll see why in a minute) gives and . Then So . Interesting!  Find an exact fraction for .   But this is just the sum of an infinite geometric series with and . Then So .    Find an exact fraction for .   But this is just the sum of an infinite geometric series with and . Then So .      Summary  For a geometric sequence, the term is given by for   For a geometric series, the sum of the first terms ( partial sum) is where is the first term.  For an infinite geometric series, the sum is provided that and is the first term.     State whether the following sequences are geometric or not. If they are, state the first term and common ratio.    no    no    yes,     no    no    yes,     Give both the general formula and the recursive formula for the term of the following sequences. Use the convention .     and      and      and      and     For the following sequences, calculate and , assuming that the first term is .     , so and      , so and     State whether the following recursively defined sequences are geometric or not. (Is there an easy way to tell?)    no    yes, with     yes, with     no    yes, with     no   For the following sequence, calculate the term:   , so   For the following sequence, calculate the term:   , so   Calculate for the series   (the exact answer is or 199.99980926513671875, but if you round to three decimals, the answer is 200.000)  Calculate for the series      Calculate the sum, if it exists, for the following series.               does not exist ( )         Calculate the following sums, if they exist.                    does not exist ( )   If the number of vampires in Transylvania doubles every month, then how many vampires will be in Transylvania in 3 years, starting from one individual? Comment on your result if the total population of Transylvania is 2 million people. 3 years is 36 months, so we have a 36-term sequence starting with The term will be , so the term will be , which is a tad larger than the total population of Transylvania.  As I was going to St. Ives, I met a man with seven wives. Each wife had seven sacks. Each sack had seven cats. Each cat had seven kits. Kits, cats, sacks, wives: does this form a geometric sequence?  1 man  7 wives     So kits, cats, sacks, and wives is the sequence , which is geometric with four terms: and .   The paper used in the photocopier by Pat's office is said to be 0.097~mm thick. If it is folded over repeatedly, doubling its thickness each time, how thick will the paper be if it's folded 7 times? Bonus: why, then, were the Mythbusters having so many problems trying to fold the paper this many times? The paper is initially 0.097 mm thick with no folds. After one fold, the thickness will be , after two folds , etc. So our starting term (zero folds) will be and then will double with r = 2 thereafter, where is not only the index but also the number of folds made. So , and the term with seven folds will be , so we can conclude that the paper thickness will be 12.4 mm, or just over 1 cm thick. (The Mythbusters realized that the problems with paperfolding lie with the fold itself, and making the fold lie as flat as possible. If I remember correctly, they resorted to C-clamps and hitting the fold with a hammer to flatten it.)    Solutions to Exercises   "
},
{
  "id": "p-339",
  "level": "2",
  "url": "sec-geom-seq-ser.html#p-339",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric sequence "
},
{
  "id": "example-82",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-82",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": " For each of the following sequences, state whether it is arithmetic, geometric, or neither.                  Geometric, because the common ratio is   Arithmetic, because the common difference is .  Neither, because there isn't either a common difference or ratio between terms. (In fact, the pattern is that for .)  Geometric, because the common ratio is .    "
},
{
  "id": "example-83",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-83",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": " Give a recursive definition for the sequence   Recall that a recursive definition has two parts: listing the first term and giving the pattern. In this case, the pattern is multiplying the previous term by to get the next term. Let's use 0 as our starting index. The recursive definition is therefore   "
},
{
  "id": "example-84",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-84",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": " Write a general formula for the sequence   This sequence is geometric with the first term 3 and common ratio 2. If we choose for our first term, then The general formula is then for .  "
},
{
  "id": "example-85",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-85",
  "type": "Example",
  "number": "3.3.5",
  "title": "",
  "body": " What is the term in the sequence in the sequence ?  This is the same sequence from the previous example. We may then use the formula we derived above with . The term is 1,572,864, which provides a nice example for how fast geometric sequences can grow, even for small values of .  "
},
{
  "id": "example-86",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-86",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": " Write a general formula for the sequence What is the fifteenth term in this sequence? The fiftieth?  If we start our counting at , then the fifteenth term is and the fiftieth term is . So the general formula is for and the fifteenth and fiftieth terms are approximately 2335.43 and , respectively.  "
},
{
  "id": "example-87",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-87",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": " Find the sum of the first 20 terms of the series   This is a geometric series with and . We want to find . The sum of the first 20 terms is 3,145,725.  "
},
{
  "id": "example-88",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-88",
  "type": "Example",
  "number": "3.3.8",
  "title": "",
  "body": " Find the sum of the first forty terms of the series .  This is a geometric series with and . We want to find . The sum of the first forty terms is approximately .  "
},
{
  "id": "example-89",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-89",
  "type": "Example",
  "number": "3.3.9",
  "title": "",
  "body": " Evaluate   This series is geometric with and . Then The sum of this series is 1.  "
},
{
  "id": "example-90",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-90",
  "type": "Example",
  "number": "3.3.10",
  "title": "",
  "body": " Evaluate   This series is geometric with and .   "
},
{
  "id": "example-91",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-91",
  "type": "Example",
  "number": "3.3.11",
  "title": "",
  "body": " Evaluate   This series is identical to the previous one except that is now negative: and .   "
},
{
  "id": "example-92",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-92",
  "type": "Example",
  "number": "3.3.12",
  "title": "",
  "body": " Evaluate .  This series is geometric with and . You may already realize what's going on, but in case you don't, let's naively put the values into the formula and see what we get: Wait! How can the sum of a bunch of positive number be negative? The answer is that our restriction for is that it must be between and 1, but . Because does not satisfy the restriction, we cannot use the above formula for . Indeed, if you add up a bunch of positive numbers that are increasing as you go up, you can see that the sum just keeps getting bigger as we add more terms. You could then either say that the sum is infinite or does not exist . These two statements are not quite equivalent. While it is correct to say that the sum does not exist , it is more descriptive to state that the sum is infinite (or to write ). There could be a sum that grows without bound in the negative direction , in which case it would be more descriptive to write than simply to say that the sum does not exist.  "
},
{
  "id": "example-93",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-93",
  "type": "Example",
  "number": "3.3.13",
  "title": "",
  "body": " Evaluate .  The best place to start is to figure out the first few terms to determine the pattern: so our sequence is This is geometric with and . Then   "
},
{
  "id": "example-94",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-94",
  "type": "Example",
  "number": "3.3.14",
  "title": "",
  "body": " Evaluate .  As in the previous example, let's figure out the first few terms to determine the pattern: so our sequence is . Wait! This sequence is arithmetic! Not only that, but the numbers are increasing. So the sum of the series does not exist due to unbounded growth in the positive direction. You can write does not exist or, if you prefer, the more descriptive .  "
},
{
  "id": "example-95",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-95",
  "type": "Example",
  "number": "3.3.15",
  "title": "",
  "body": " Find an exact fraction for .   But this is just the sum of an infinite geometric series with and . Then So .  "
},
{
  "id": "example-96",
  "level": "2",
  "url": "sec-geom-seq-ser.html#example-96",
  "type": "Example",
  "number": "3.3.16",
  "title": "",
  "body": " Find an exact fraction for .   But this is just the sum of an infinite geometric series with and . Then So .  "
},
{
  "id": "exercise-482",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-482",
  "type": "Exercise",
  "number": "3.3.8.1",
  "title": "",
  "body": "  no "
},
{
  "id": "exercise-483",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-483",
  "type": "Exercise",
  "number": "3.3.8.2",
  "title": "",
  "body": "  no "
},
{
  "id": "exercise-484",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-484",
  "type": "Exercise",
  "number": "3.3.8.3",
  "title": "",
  "body": "  yes,  "
},
{
  "id": "exercise-485",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-485",
  "type": "Exercise",
  "number": "3.3.8.4",
  "title": "",
  "body": "  no "
},
{
  "id": "exercise-486",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-486",
  "type": "Exercise",
  "number": "3.3.8.5",
  "title": "",
  "body": "  no "
},
{
  "id": "exercise-487",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-487",
  "type": "Exercise",
  "number": "3.3.8.6",
  "title": "",
  "body": "  yes,  "
},
{
  "id": "exercise-488",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-488",
  "type": "Exercise",
  "number": "3.3.8.7",
  "title": "",
  "body": "   and  "
},
{
  "id": "exercise-489",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-489",
  "type": "Exercise",
  "number": "3.3.8.8",
  "title": "",
  "body": "   and  "
},
{
  "id": "exercise-490",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-490",
  "type": "Exercise",
  "number": "3.3.8.9",
  "title": "",
  "body": "   and  "
},
{
  "id": "exercise-491",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-491",
  "type": "Exercise",
  "number": "3.3.8.10",
  "title": "",
  "body": "   and  "
},
{
  "id": "exercise-492",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-492",
  "type": "Exercise",
  "number": "3.3.8.11",
  "title": "",
  "body": "   , so and  "
},
{
  "id": "exercise-493",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-493",
  "type": "Exercise",
  "number": "3.3.8.12",
  "title": "",
  "body": "   , so and  "
},
{
  "id": "exercise-494",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-494",
  "type": "Exercise",
  "number": "3.3.8.13",
  "title": "",
  "body": "  no "
},
{
  "id": "exercise-495",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-495",
  "type": "Exercise",
  "number": "3.3.8.14",
  "title": "",
  "body": "  yes, with  "
},
{
  "id": "exercise-496",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-496",
  "type": "Exercise",
  "number": "3.3.8.15",
  "title": "",
  "body": "  yes, with  "
},
{
  "id": "exercise-497",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-497",
  "type": "Exercise",
  "number": "3.3.8.16",
  "title": "",
  "body": "  no "
},
{
  "id": "exercise-498",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-498",
  "type": "Exercise",
  "number": "3.3.8.17",
  "title": "",
  "body": "  yes, with  "
},
{
  "id": "exercise-499",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-499",
  "type": "Exercise",
  "number": "3.3.8.18",
  "title": "",
  "body": "  no "
},
{
  "id": "exercise-500",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-500",
  "type": "Exercise",
  "number": "3.3.8.19",
  "title": "",
  "body": "For the following sequence, calculate the term:   , so  "
},
{
  "id": "exercise-501",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-501",
  "type": "Exercise",
  "number": "3.3.8.20",
  "title": "",
  "body": "For the following sequence, calculate the term:   , so  "
},
{
  "id": "exercise-502",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-502",
  "type": "Exercise",
  "number": "3.3.8.21",
  "title": "",
  "body": "Calculate for the series   (the exact answer is or 199.99980926513671875, but if you round to three decimals, the answer is 200.000) "
},
{
  "id": "exercise-503",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-503",
  "type": "Exercise",
  "number": "3.3.8.22",
  "title": "",
  "body": "Calculate for the series    "
},
{
  "id": "exercise-504",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-504",
  "type": "Exercise",
  "number": "3.3.8.23",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-505",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-505",
  "type": "Exercise",
  "number": "3.3.8.24",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-506",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-506",
  "type": "Exercise",
  "number": "3.3.8.25",
  "title": "",
  "body": "   does not exist ( ) "
},
{
  "id": "exercise-507",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-507",
  "type": "Exercise",
  "number": "3.3.8.26",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-508",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-508",
  "type": "Exercise",
  "number": "3.3.8.27",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-509",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-509",
  "type": "Exercise",
  "number": "3.3.8.28",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-510",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-510",
  "type": "Exercise",
  "number": "3.3.8.29",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-511",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-511",
  "type": "Exercise",
  "number": "3.3.8.30",
  "title": "",
  "body": "   does not exist ( ) "
},
{
  "id": "exercise-512",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-512",
  "type": "Exercise",
  "number": "3.3.8.31",
  "title": "",
  "body": "If the number of vampires in Transylvania doubles every month, then how many vampires will be in Transylvania in 3 years, starting from one individual? Comment on your result if the total population of Transylvania is 2 million people. 3 years is 36 months, so we have a 36-term sequence starting with The term will be , so the term will be , which is a tad larger than the total population of Transylvania. "
},
{
  "id": "exercise-513",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-513",
  "type": "Exercise",
  "number": "3.3.8.32",
  "title": "",
  "body": "As I was going to St. Ives, I met a man with seven wives. Each wife had seven sacks. Each sack had seven cats. Each cat had seven kits. Kits, cats, sacks, wives: does this form a geometric sequence?  1 man  7 wives     So kits, cats, sacks, and wives is the sequence , which is geometric with four terms: and .  "
},
{
  "id": "exercise-514",
  "level": "2",
  "url": "sec-geom-seq-ser.html#exercise-514",
  "type": "Exercise",
  "number": "3.3.8.33",
  "title": "",
  "body": "The paper used in the photocopier by Pat's office is said to be 0.097~mm thick. If it is folded over repeatedly, doubling its thickness each time, how thick will the paper be if it's folded 7 times? Bonus: why, then, were the Mythbusters having so many problems trying to fold the paper this many times? The paper is initially 0.097 mm thick with no folds. After one fold, the thickness will be , after two folds , etc. So our starting term (zero folds) will be and then will double with r = 2 thereafter, where is not only the index but also the number of folds made. So , and the term with seven folds will be , so we can conclude that the paper thickness will be 12.4 mm, or just over 1 cm thick. (The Mythbusters realized that the problems with paperfolding lie with the fold itself, and making the fold lie as flat as possible. If I remember correctly, they resorted to C-clamps and hitting the fold with a hammer to flatten it.) "
},
{
  "id": "sec-bigO-growth-rates",
  "level": "1",
  "url": "sec-bigO-growth-rates.html",
  "type": "Section",
  "number": "4.1",
  "title": "Big O and Rates of Growth",
  "body": " Big O and Rates of Growth   Basic Concepts  Before we get to definitions, let's start off with a conceptual example. Suppose you are moving and you want to rent a truck for a day. You have looked up the rental rates and your optsions are:   A flat rate of $80 per day.    A rate of $2 per kilometre.   Which rate is better?  Hopefully it's clear that the best rate must depend on how many kilometres you will be driving. If you know that you will only be making one trip with a total distance of 10 km, then you would have to pay only $20. However, if you will be driving for more than 40 km, then the flat rate of $80 per day would cost less than the rate per kilometre.  The big idea is that if, when you are first renting the truck, you are unsure about how far you will be driving, then the safest bet is to go for the flat rate. If you end up driving a short distance, then you could possibly have saved money on the other rate, but if you end up driving a long distance, then you could possibly pay a lot more than $80.   "
},
{
  "id": "sec-fact-exp-growth",
  "level": "1",
  "url": "sec-fact-exp-growth.html",
  "type": "Section",
  "number": "4.2",
  "title": "Factorial and Exponential Growth",
  "body": " Factorial and Exponential Growth  "
},
{
  "id": "sec-log-growth",
  "level": "1",
  "url": "sec-log-growth.html",
  "type": "Section",
  "number": "4.3",
  "title": "Logarithmic Growth",
  "body": " Logarithmic Growth  "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
