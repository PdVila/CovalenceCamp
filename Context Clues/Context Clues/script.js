$(document).ready(function () {
    $("body").html("When this page loads, 100 h3 elements are inserted");
    for (var i = 1; i < 101; i++) {
        
        $("body").append(`<h3 class="link">Case ${[i]}`);
    }
    $(".link").on("click", function() {
    alert(`Hello, ${pickFriend}`);
});
});
//Array of 5 friend names
let friends = ['Royal', 'Alex', 'Roddy', 'Jack', 'Nathan'];
let rank = ['Iron', 'Bronze', 'Silver', 'Gold', 'Plat', 'Diamond', 'Masters', 'Challenger']
let favChampion = ['Ahri', 'Jinx', 'Miss Fortune', 'Kayn', 'Thresh', 'Tahm Kench', 'Ashe', 'Katarina', 'Zac'];

// Picks a random friend and sets it
let pickFriend = friends[Math.floor(Math.random()*friends.length)];
//Picks a random rank and sets it
let pickRank = rank[Math.floor(Math.random()*rank.length)];
//Picks randomChamp
let pickChampion = favChampion[Math.floor(Math.random()*favChampion.length)];



//click on the h3 element alerts

