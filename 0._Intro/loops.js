const favoriteThings = ["Clea", 420, true, "\u2606"];

//write a for each loop
// favoriteThings.forEach((element, index, array) => console.log(element, index, array));
// favoriteThings.forEach((favoriteThings) => console.log(favoriteThings));

// task turn them all to strings and make say: "Ooh I like " + favoriteThing

 const favoriteThingWithCommentary = [];
favoriteThings.forEach(favoriteThing => favoriteThingWithCommentary.push(`Ooh I like ${favoriteThing}`));

// console.log(favoriteThingWithCommentary); 

const subjectiveFavoriteThings = favoriteThings.map(favoriteThing => `Ooh I like ${favoriteThing}`);
// console.log(subjectiveFavoriteThings);

// console.log(favoriteThings.indexOf(420));

const longFavoriteThings = favoriteThings.filter(favoriteThing => favoriteThing.length > 1);
console.log(longFavoriteThings);

// for loop er når man skal tælle noget
// for each er hvis vi ikke har data udefor, f.eks. løbe igennem html elementer
// map looper en til en
// filter filtrerer fra
// reduce er en high end order, der kan mange ting kekw
