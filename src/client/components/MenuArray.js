// making one array for the whole menu, and then multiple inner arrays for the different sections of the menu.  I'll start with just drinks, appetizers, soup/salad, mains, and desserts.  I'll give each item some key/value pairs of title, image, price, and description.  Oh, I'll also add an item so we can use that as an index

const menuArray = [
  [
    {"item": "1", "title": "Asahi Super Dry", "image": "https://www.asahisuperdry.com/media/images/OurBeer-lg.original.jpg", "price": "4.99", "description": "'Karakuchi' means dry, and it is the word that best describes the sophisticated yet congenial character of 'ASAHI SUPER DRY'. The name was given the title Super to mean a more dry-taste. Its refreshingly crisp, clear taste makes it an excellent match for any cuisine."},
    {"item": "2", "title": "Peroni", "image": "https://132257054.cdn6.editmysite.com/uploads/1/3/2/2/132257054/s141702492982091317_p65_i2_w1223.jpeg", "price": "4.99", "description": "A pale golden, crisp and refreshing beer, with a delicate balance of bitterness, citrus and aromatic notes and a fast, clean finish"},
    {"item": "3", "title": "House Sake", "image": "https://www.realsimple.com/thmb/1zW2bEiO2AHUtEfGmEvpL2X2_0g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sake-2000-b6b5005ff0f249ee889df759a1d5d123.jpg", "price": "19.99 per bottle", "description": "Our house Sake is an alcoholic beverage made from rice through fermentation and filtration. For fermentation of sake, rice koji, a kind of fungi grown on rice, is used. Sake has been made for over 1,000 years all over the Japanese islands."},
    {"item": "4", "title": "House Red", "image": "https://www.thespruceeats.com/thmb/N9TEoqtQz-R9zkjMXM8I530sj30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/red-wine-is-poured-into-a-glass-from-a-bottle--light-background--1153158143-98320451802c485cb6d7b5437c7fd60a.jpg", "price": "19.99 per bottle", "description": "Our house red combine a fruity oak flavor with a daring, almost romantic, tinger of aged elder berries personally stomped on by Italian Monks who have never met a woman and absolutely do not plan to." },
    {"item": "4", "title": "Suntory Whiskey", "image": "https://house.suntory.com/sites/default/files/styles/original/public/2022-10/03_cocktail-serves_gallery.jpg.webp?itok=4qDbjgRE", "price": "11.99", "description": "For relaxing times, make it Suntory times.  Two fingers, served on the rocks."},
    {"item": "5", "title": "Assorted Fountain Drinks", "image": "https://southpark.garlicknotpizza.com/wp-content/uploads/sites/15/2020/08/grid-fountain-drinks2.png", "price": "4.99", "description": "We serve Coca Cola products here.  We do not respect Pepsi and we never will.  It's a degenerate soda line.  If you ask for Pepsi we will ask you politely, but firmly, to leave and to never come back."},
    {"item": "6", "title": "espresso", "image": "https://www.tasteofhome.com/wp-content/uploads/2023/03/TOH-espresso-GettyImages-1291298315-JVcrop.jpg", "price": "3.99", "description": "Our robust and bold espresso is made from beans harvested, individually, by the hands of small sicialian children who were paid in rice.  Also, we don't serve tea so stop asking.  We will NEVER serve tea."}
  ],
  [
    {"item": "1", "title": "Edamame", "image": "https://i.ytimg.com/vi/_jNvqD9J53M/maxresdefault.jpg", "price": "7.99", "description": "Edamame are young soybeans harvested before they ripen or harden. Available shelled, in the pod, fresh, or frozen, they are a popular, plant-based food that may be good for a person's health. Edamame beans are naturally gluten-free and low in calories. They contain no cholesterol and provide protein, iron, and calcium."},
    {"item": "2", "title": "Arincini", "image": "https://assets.bonappetit.com/photos/5bc64bd608523857c0e25e0a/1:1/w_2813,h_2813,c_limit/arancini-1.jpg", "price": "9.99", "description": "Three deep fried and gooey balls of dough with cheese and rice and stuff inside.  We have an old italian woman in the back making these all day long.  We do not pay her."},
    {"item": "3", "title": "Shrimp Goyza", "image": "https://moroorecipe.com/wp-content/uploads/2024/01/shrimp-gyoza-2-scaled-e1704439015744.jpg", "price": "12.99", "description": "Gyoza is juicy and mouth-watering Japanese dumplings, usually filled with ground meat, cabbage, Chinese chives (called Nira in Japanese), ginger, and garlic. The thin dough wrappers allow for a crispy outside when pan-fried and a juicy inside."},
    {"item": "4", "title": "Bruschetta", "price": "8.99", "image": "https://www.allrecipes.com/thmb/YnD6s0OqDK6Mt4jqcflf7cVXn9o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/54165-Balsamic-Bruschetta-mfs_001-e2cfc398086842038eeb634eab588ef4.jpg", "description": "Garlic herb crostinis topped with ripe, diced Roma tomatoes, fresh sweet basil, extra virgin olive oil and a drizzle of honey balsamic reduction."},
    {"item": "5", "title": "Chicken Yakatori", "price": "12.99", "image": "https://www.thespruceeats.com/thmb/3EoSHGG8wO_FuPgnEj8xZoehbA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickenyakitori-589ddda65f9b58819c878628.jpeg", "description": "Grilled chicken skewers made from bite sized pieces of meat from all different parts of the chicken, such as the breasts, thighs, skin, liver and other innards.  Isn't that an appetizing word, innards?"},
    {"item": "6", "title": "Antipasto Platter", "price": "12.99", "image": "https://www.carolynscooking.com/wp-content/uploads/2022/01/Antipasto-Platter-2-500x500.jpg", "description": "Cheese, peppers, olives, various sliced deli meats and such.  Gabagool, that's a fun one.  Don't let it touch regular pasto or we all die."},
    {"item": "7", "title": "Shrimp Shumai", "image": "https://www.tablefortwoblog.com/wp-content/uploads/2023/01/shrimp-shumai-recipe-photo-tablefortwoblog-10-scaled.jpg", "price": "10.99", "description": "A subtly sweet yet savory mixture of shrimp and water chestnuts is joined by a montage of goodies that each contribute something special to these delicate dumplings. Garlic and ginger provide a punch of flavor while oyster sauce lends some sweetness and soy sauce kicks in with that umami, saltiness loved by many. Finish it off with the sweet acidity of rice wine vinegar and a pinch of white pepper and you’ve got your self some shumai to write home about."}
  ],
  [{"item": "1", "title": "Miso Soup", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/6/item-900000000183077706_1694640949.png?size=medium", "price": "2.99", "description": "It's just Japanese for water, which proves we're kind of just messing with you here.  Soy bean broth with soft tofu, seaweed, and scallions"},
  {"item": "2", "title": "Minestrone", "image": "https://www.ambitiouskitchen.com/wp-content/uploads/2020/02/Classic-Minestrone-Soup-5.jpg", "description": "Bada bing, bada boom, whaddaya say whaddya know, fuggetabout it gabagool.  This hearty soup has beans and meat and a rich tomato based broth.", "price": "4.99" },
  {"item": "3", "title": "Pork Belly Tonkotu Hell Ramen", "image": "https://cdn.vox-cdn.com/thumbor/8EWRkiuZ6ZWRopakFSLU5FRPbYs=/0x0:4000x2667/1200x900/filters:focal(1680x1014:2320x1654)/cdn.vox-cdn.com/uploads/chorus_image/image/56845029/52594509335_1e95da7d87_o.49.jpg", "price": "13.99", "description": "Rich tonkotsu broth served with house made noodles, house slaughtered pork belly, an egg we left in the sun for several days, and whatever vegetables we have leftover from less profitable meals.  We also dump SO MUCH chili oil in this thing, it will absolutely destroy your insides."},
  {"item": "4", "title": "Stracciatella", "image": "https://www.foodandwine.com/thmb/fZe2sSZ2WC8ewVc7TfRvk1hmQnk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/stracciatella-XL-RECIPE0317-d23669b7288b4f1a93590ae3744818b9.jpg", "price": "5.99", "description": "Italian version of Egg Drop soup, which the Japanese side of the establishment would not serve due to long standing racial animus tracing back literally thousands of years.  Anyway, this soup combines shredded chicken, spinach, basil, peas, grated Parmigiano-Reggiano, and eggs."},
  {"item": "5", "title": "Seaweed Salad", "price": "7.99", "image": "https://images.kitchenstories.io/recipeImages/36_02_JapaneseSeaweedSalad_final.jpg", "description": "Collin and Tony personally dived into the ocean off the coast of Kyoto, which we're relatively sure is coastal, to harvest the seaweed to make this delicious and nutrious salad.  It does have sesame seeds so if you're allergic to this this will kill you.  Which is either a positive or a negative depending on where you are in your life."},
  {"item": "6", "title": "Caeser Salad", "image": "https://www.foodandwine.com/thmb/KfNlN-jRv_g0cvRr-i5SNIfrOrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vietnamese-caesar-salad-with-anchovy-croutons-FT-RECIPE0819-9b4cf0b4fe404da8b2ba1ac17edfd156.jpg", "price": "9.99", "description": "Do you know how to spell caeser?  I spelled it wrong the first time.  Anyway, this is romaine lettuce with a creamy dressing and some croutons and you know the deal.  It has anchovies too, which we will not be taking out.  They're delicious, and you're both wrong and weak if you disagree."},
  {"item": "7", "title": "House Salad", "image": "https://www.allrecipes.com/thmb/-NmU_QyJmMohveBU0W7MiraQwFs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4479962-67d62c6738294919bb32d44ab1a5d9f8.jpg", "price": "4.99", "description": "Listen, there are some reports that we've been bringing ziploc bags to Olive Garden and then stealing their salad to sell as our own.  There is no basis in truth here, we will be suing everyone who suggests otherwise, and also maybe THEY should rethink their unlimited salad deals.  Oh, also, these come with breadsticks."}

],
  [
    {"item": "1", "title": "California Roll", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/6/item-900000000167871256_1694640112.png?size=medium", "price": "3.99", "description": "Six pieces. Imitation crab, avocado, cucumber, and sesame seeds.  Also includes free plane ticket to California."},
    {"item": "2", "title": "Negi Hamachi Roll", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/3/item-900000000184061293_1694484031.png?size=medium", "description": "Six pieces. Fresh yellowtail, scallion, and sesame seeds.  Also a secret ingredient that you are legally prohibted from asking about.", "price": "4.99"},
    {"item": "3", "title": "Salmon Roll", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/7/item-900000000184061297_1694483102.png?size=medium", "price": "5.99", "description": "Six pieces. Fresh salmon, and sesame seeds"},
    {"item": "4", "title": "Spicy Salmon Roll", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/1/item-900000000184062201_1694640844.png?size=medium", "price": "6.99", "description": "Six pieces. Spicy salmon, avocado, cucumber roll wrapped with tempura crunch topped with spicy mayo, and sesame seeds"},
    {"item": "5", "title": "Tuna Roll", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/3/item-900000000184062203_1694475788.png?size=medium", "price": "5.99", "description": "Six pieces. Fresh tuna, and sesame seeds"},
    {"item": "6", "title": "Spicy Tuna Roll", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/7/item-900000000184062207_1694397587.png?size=medium", "price": "3.99", "description": "Six pieces. Ground whole tuna mixed with house spicy tuna sauce, and sesame seeds.  I don't know why this cheaper than a regular tuna roll, but take advantage of it"}
  ],
  [
    {"item": "1", "title": "Nama Sake Sushi", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/8/item-900000000206392258_1694384758.png?size=medium", "price": "1.99/piece", "description": "Fresh Salmon"},
    {"item": "2", "title": "Maguro Sushi", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/9/item-900000000209639369_1694483013.png?size=medium", "price": "1.99/piece", 
    "description": "Fresh Tuna"},
    {"item": "6", "title": "Shiro Maguro Sushi", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/9/item-900000000209715159_1694482681.png?size=medium", "price": "1.99/piece", "description": "Fresh white tuna, Escolar"},
    {"item": "3", "title": "Hamachi Sushi", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/3/item-900000000209715163_1694640582.png?size=medium", "description": "Fresh yellowtail", "price": "1.99/piece"},
    {"item": "4", "title": "Saba Sushi", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/9/item-900000000209715169_1694640547.png?size=medium", "price": "2.99/piece", "description": "Fresh, and also holy, mackarel"},
    {"item": "5", "title": "Ebi Sushi", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/1/item-900000000209715171_1694400328.jpg?size=medium", "price": "1.99/piece", "description": "Fresh Shrimp"},
    {"item": "6", "title": "Masago Sushi", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/1/item-900000000209715161_1694382509.jpg?size=medium", "price": "1.99/piece", "description": "Fresh Smelt Roe.  Don't look up what that is, it's gross"},
    {"item": "7", "title": "Kani Sushi", "image": "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-164410000000000000/menu/items/7/item-900000000209715177_1694640513.png?size=medium", "price": ".99/piece", "description": "Imitation crab meat.  Very affordable"}
  ],
  [{"item": "1", "title": "Pepperoni Calzone", "price": "7.99", "image": "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/qenvybsr/976d0340-5c5e-40f7-9331-76bc1da3735c.jpeg", "description": "A calzone is like if pizza was a sandwich, which seems unnecessary but people asked for it so we serve it now.  This one has pepperoni inside"},
  {"item": "2", "title": "Sausage Calzone", "price": "7.99", "image": "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/qenvybsr/976d0340-5c5e-40f7-9331-76bc1da3735c.jpeg", "description": "A calzone is like if pizza was a sandwich, which seems unnecessary but people asked for it so we serve it now.  This one has sausage inside"},
  {"item": "3", "title": "Veggie Calzone", "price": "7.99", "image": "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/qenvybsr/976d0340-5c5e-40f7-9331-76bc1da3735c.jpeg", "description": "A calzone is like if pizza was a sandwich, which seems unnecessary but people asked for it so we serve it now.  This one has mushrooms, onions, broccoli and peppers inside"},
],
[{"item": "1", "title": "Cheese Pizza", "description": "Simple, yet simply delicious. Real cheese made from mozzarella on top of our signature pizza sauce with your choice of crust, then baked to a golden brown. It has just what you want, and nothing you don't.  All of our dough is made by the same old Italian woman mentioned above.  We still do not pay her and we don't know why she keeps coming back but we're both appreciative and concerned.",
"price": ["12 Inch - 15.99", "14 inch - 17.99", "16 inch - 19.99"],
"image": "https://www.papajohns.com/static-assets/a/images/web/product/pizzas/pan-1top-cheese-compressed.jpg"
},
{"item": "2", "title": "Pepperoni Pizza", "description": "Our hous made buttery crust crust covered with our signature pizza sauce, real cheese made from mozzarella, and pepperoni. With a pepperoni in almost every bite, it's one of our most popular pizzas.  Also, you don't have to feel bad about eating meat because we ensure every pig we slaughter is racist.",
"price": ["12 Inch - 17.99", "14 inch - 19.99", "16 inch - 21.99"],
"image": "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/b949d698-39d5-4056-b3b7-fbea4d09ee70.png"
}
]
]

const drinksArray = menuArray[0];
const appsArray = menuArray[1];
const soupSaladArray = menuArray[2];
const rollsArray = menuArray[3];
const nigiriArray = menuArray[4];
const calzoneArray = menuArray[5];
const pizzaArray = menuArray[6]

export { menuArray, drinksArray, appsArray, soupSaladArray, rollsArray, nigiriArray, calzoneArray, pizzaArray };