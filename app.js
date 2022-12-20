let value;
const name = "Aydan";
const surname = "Shah";
const langs = "Java, Python, C++";
value = name + " " + surname;
value = "Aydan";
value += "Shah"; // value = value + "shah"
value = name.length;
value = name.concat(" ", surname, "Caz");
value = name.toLowerCase();
value = name.toUpperCase();
value = name[0];
value = name[2];
value = name[name.length-1]; // son deyeri qaytarir
value = name.indexOf("A");
value = name.charAt(0);
value = name.charAt(name.length-1);
value = langs.split(",");
value = langs.replace("Python", "CSS");
value = langs.includes("Java");


console.log(value);