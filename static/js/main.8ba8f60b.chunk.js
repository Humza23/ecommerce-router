(this["webpackJsonpweb-guided-project-react-router"]=this["webpackJsonpweb-guided-project-react-router"]||[]).push([[0],{28:function(e,i,a){"use strict";a.r(i);var s=a(0),r=a(14),t=a(17),o=a(7),n=a(2),d=a(1);function h(){var e=Object(n.f)();return Object(d.jsxs)("div",{className:"home-wrapper",children:[Object(d.jsx)("img",{className:"home-image",src:"https://source.unsplash.com/F6-U5fGAOik",alt:""}),Object(d.jsx)("button",{onClick:function(){e.push("/router-commerce/items-list")},className:"md-button shop-button",children:"Shop now!"})]})}function l(e){var i=e.items,a=Object(n.h)().path;return Object(d.jsx)("div",{className:"items-list-wrapper",children:i.map((function(e){return Object(d.jsxs)("div",{className:"item-card",children:[Object(d.jsxs)(o.b,{to:"".concat(a,"/").concat(e.id),children:[Object(d.jsx)("img",{className:"items-list-image",src:e.imageUrl,alt:e.name}),Object(d.jsx)("p",{children:e.name})]}),Object(d.jsxs)("p",{children:["$",e.price]})]},e.id)}))})}function c(e){var i=e.text;return Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"item-details",children:i})})}function p(e){var i=e.items,a=Object(n.g)().itemID,s=Object(n.h)(),r=s.url,t=s.path,h=s.params;console.log("url",r),console.log("path",t),console.log("params",h);var l=i.find((function(e){return e.id==a}))||{};return Object(d.jsxs)("div",{className:"item-wrapper",children:[Object(d.jsxs)("div",{className:"item-header",children:[Object(d.jsx)("div",{className:"image-wrapper",children:Object(d.jsx)("img",{src:l.imageUrl,alt:l.name})}),Object(d.jsxs)("div",{className:"item-title-wrapper",children:[Object(d.jsx)("h2",{children:l.name}),Object(d.jsxs)("h4",{children:["$",l.price]})]})]}),Object(d.jsxs)("nav",{className:"item-sub-nav",children:[Object(d.jsx)(o.c,{to:"".concat(r,"/shipping"),children:"Shipping"}),Object(d.jsx)(o.c,{to:"".concat(r,"/description"),children:"Description"})]}),Object(d.jsx)(n.a,{path:"".concat(t,"/shipping"),children:Object(d.jsx)(c,{text:l.shipping})}),Object(d.jsx)(n.a,{path:"".concat(t,"/description"),children:Object(d.jsx)(c,{text:l.description})})]})}var m=[{name:"Reel Viewer",id:0,price:29.95,imageUrl:"https://www.uncommongoods.com/images/items/47400/47435_1_360px.jpg",description:"Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add them to your very own reel using the redemption code included with your viewer. Once you receive your made-to-order reel, pop it in the viewer and marvel at baby's first steps, or your favorite beach at sunset, or... well, whatever else you want immortalized. Remember: You're the view master now. Made in Oregon.",shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Mathematical Glasses - Set of 4",id:1,price:38,imageUrl:"https://www.uncommongoods.com/images/items/46700/46720_1_360px.jpg",description:"Whether it's advanced calculus or just calculating ideal ice to iced tea ratios, stay hydrated in statistical style with this set. Drinking with mathematical precision is easy: Just use the standard ounce marks and their equivalent constants, then geek out over the expanded formulas\u2014all presented in delightfully differential colors like graph paper blue and #2 pencil gray. Glassware made in New Jersey. Decorated in Blanchester, Ohio. ",shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Shakespearean Insults Chart",id:2,price:25.49,imageUrl:"https://www.uncommongoods.com/images/items/27300/27303_1_360px.jpg",description:'We all know someone who deserves to be dubbed a "penurious and indubitate beggar." And from time to time, you may be tempted to say that "he has not so much brain as ear-wax." This rollicking infographic is chock-full of such colorful insults from Shakespeare, the playwright who practically invented the art of the poetic put-down. Designer Tim Sanders culled the Oxford Complete Shakespeare to compile an endlessly entertaining word map of the Bard\'s boisterous, bawdy jabs, each one a mini-masterpiece of raunchy, rancorous Renaissance wit. The four-color, offset-printed poster on 100 lb., acid-free, FSC-certified paper makes the perfect reference and decor for an astute office, library, or thespian lounge. Made in Seattle.',shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Yoga Joes",id:3,price:25,imageUrl:"https://www.uncommongoods.com/images/items/43200/43212_1_360px.jpg",description:'This troop\'s mission? To keep inner peace. Designer Dan Abramson looked to a favorite childhood toy to help inspire grown-ups to get into yoga. Armed with a general knowledge of the practice, this platoon of posing servicemen show off their secret weapon: major strength and flexibility. Give the battalion to the disciplined yogi or well-balanced lieutenant in your life, or keep them in your barracks as a reminder to soldier on through your basic (yoga) training. Packaged in a "mini yoga studio" box with a bamboo floor. Made of ABS plastic in China.',shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Dinosaur Taco Holders",id:4,price:12,imageUrl:"https://www.uncommongoods.com/images/items/45700/45759_1_360px.jpg",description:"Known for their hard shells and spicy dispositions, dinosaurs roamed the earth millions of years ago. These taco-toting beasts are back for a blast of mealtime fun. The durable, dishwasher-safe triceratops and t-rex hold two hard shell tacos until you make them extinct. Made in China.",shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Color Changing Cinema Lightbox",id:5,price:49.95,imageUrl:"https://www.uncommongoods.com/images/items/46600/46667_1_360px.jpg",description:"Picture your name or favorite phrase in lights\u2026 bright, color-changing lights. This colorful, retro lightbox adds blockbuster bling to special occasions and everyday spaces in need of some inspiration. Back-lit like a real marquee, it cycles through a spectrum of colors or stops on your hue of choice, including classic white. The piece comes in three sizes including mini for your desktop or side table, standard, or large for special occasions like weddings or birthdays. Lightweight and portable, you can slide any creative combination of the included characters into three slotted lines. Battery or USB-powered. Made in China.",shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Avocado Tree Starter Kit - Set of 3",id:6,price:20,imageUrl:"https://www.uncommongoods.com/images/items/40800/40804_1_360px.jpg",description:"Avocados are the gift that keeps on giving, and this avocado tree starter kit makes it easy to double your green. Simply insert the shiny seed of your last avocado into the pod, float it in a water bath, and patiently watch your windowsill set-up sprout signs of life. This expertly designed floating planter easily holds a toothpick flag to mark your progress from day one to avocado toast. Glass bowl is not included. Made in China.",shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Hero Bookend",id:7,price:19.95,imageUrl:"https://www.uncommongoods.com/images/items/47500/47500_1_360px.jpg",description:'After a full day of fighting crime, this miniature superhero has his priorities straight: Saving the stories! The little defender appears to have extraordinary strength, "pushing" a row of your favorite books upright. Place the cover of a paperback book around the traditional book end to disguise it, and the hero connects on the other side with superhuman strength (aka a magnet). It\'s a playful nod to every courageous protagonist, and makes a great gift for literary lovers whether teachers, writers, or just voracious readers. Designed by Ori Niv in Tel Aviv, Isreal. Made in China.',shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Fishing Pole Campfire Roaster",id:8,price:29.95,imageUrl:"https://www.uncommongoods.com/images/items/43000/43021_1_360px.jpg",description:"We once toasted a marshmallow THIS BIG. Hook and roast your favorite campfire food with this fishing pole\u2013inspired skewer. Made of powder-coated steel and finished with a maple handle, this flipping-fun roaster will occupy a prime spot in your camp tackle box. Find a comfy spot in front of the fire, then jig the pole to flip your snack so it's evenly roasted on all sides. Made in Taiwan.",shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Elwood the Unicorn Cereal Bowl",id:9,price:39.95,imageUrl:"https://www.uncommongoods.com/images/items/25800/25893_1_360px.jpg",description:'With his flowing rainbow mane and sweetly stout body, Elwood turns a simple bowl of cereal, soup, or ice cream into a walk on the wondrous side. His iconic horn promises a bit of magic with your meal, while his enigmatic blue eyes stare deep into yours as if to say, "Hey friend, all the enchantment you need is right here within my ample stoneware vessel." Each hand painted detail showcases your Elwood\'s unique personality, while his all-purpose, hand-thrown silhouette makes him an equally charming companion as well as a trinket dish and miraculous mascot. Handmade by JoAnn Stratakos in Pennsylvania.',shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Spotted Wellies Garden Ducks",id:10,price:19.99,imageUrl:"https://www.uncommongoods.com/images/items/26500/26530_1_360px.jpg",description:"This trio of darling ducklings will waddle into your home and your heart. Each duck is hand-carved from sustainable bamboo and reclaimed teak by artisans in Indonesia and finished with charming hand-painted booties. Since each one is made by hand, it has its own look, name, and lovable personality. Shelter the big duck, little duck, or baby duck, or collect the whole paddle! Place them inside to sweeten up any space, or give them a coat of varnish and let them liven up your lawn or garden. Handmade in Indonesia.",shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."},{name:"Eye Glasses Holder",id:11,price:15.49,imageUrl:"https://www.uncommongoods.com/images/items/19000/19079_1_360px.jpg",description:"A group of craftsmen in India is trying to help you find your glasses. This hand-carved wooden statuette is perfect for holding your glasses when you're not using them. No more searching around blindly, or trying to remember where you last put them down.",shipping:"Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: \r\n ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."}];function u(){var e=Object(s.useState)([]),i=Object(t.a)(e,2),a=i[0],r=i[1];return Object(s.useEffect)((function(){Promise.resolve({success:!0,data:m}).then((function(e){return r(e.data)}))}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)("h1",{className:"store-header",children:"Emily's Trinkets"}),Object(d.jsxs)("div",{className:"nav-links",children:[Object(d.jsx)(o.b,{to:"/router-commerce",children:"Home"}),Object(d.jsx)(o.b,{to:"/router-commerce/items-list",children:"Shop"})]})]}),Object(d.jsxs)(n.c,{children:[Object(d.jsx)(n.a,{path:"/router-commerce/items-list/:itemID",children:Object(d.jsx)(p,{items:a})}),Object(d.jsx)(n.a,{path:"/router-commerce/items-list",children:Object(d.jsx)(l,{items:a})}),Object(d.jsx)(n.a,{exact:!0,path:"/router-commerce",children:Object(d.jsx)(h,{})})]})]})}a.p;Object(r.render)(Object(d.jsx)(o.a,{children:Object(d.jsx)(u,{})}),document.querySelector("#root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.8ba8f60b.chunk.js.map