$(vibes).hide();
$(room1).hide();
$(arcticencounter).hide();
$(coastalencounter).hide();
$(desertencounter).hide();
$(forestencounter).hide();
$(grasslandencounter).hide();
$(mountainencounter).hide();
$(swampencounter).hide();
$(underdarkencounter).hide();
$(underwaterencounter).hide();
$(urbanencounter).hide();
$(trapencounter).hide();
$(treasureencounter).hide();
$(obstacleencounter).hide();

var intros = [
  "Deep in the frigid arctic plains, our adventurers encounter the entrance to a dungeon.", 
  "Chancing upon a rare low tide, as if by magic, our adventurers encounter the entrance to a dungeon.", 
  "Eyes bitten by a red-hot squall of coarse desert sands, our adventurers encounter the entrance to a dungeon.", 
  "Veering a ways off the winding forest path, our adventurers encounter the entrance to a dungeon.", 
  "Wading through the shoulder-high grass of a vast remote plain, our adventurers encounter the entrance to a dungeon.", 
  "Nestled in the obsidian crags of the looming mountain, our adventurers encounter the entrance to a dungeon.", 
  "Obscured by the bubbling muds and gases of the noxious swamp, our adventurers encounter the entrance to a dungeon.",
  "Miles and miles underground, beyond the threshold of all light and natural life, our adventurers encounter the entrance to a dungeon.",
  "Carved into the swirling visage of the ocean floor our adventurers encounter the entrance to a dungeon.", 
  "In a dark and narrow alley in the heart of the city, our adventurers encounter the entrance to a dungeon."
]

var airs = [
    "The air inside the dungeon is clear and damp.",
    "The air inside the dungeon is clear and drafty.",
    "The air inside the dungeon is clear but cold.",
    "The air inside the dungeon is misty and cold.",
    "The air inside the dungeon is clear, with a cloudy mist blanketing the floor.",
    "The air inside the dungeon is clear and warm.",
    "The air inside the dungeon is hazy and humid.",
    "The air inside the dungeon is uncomfortably steamy.",
    "The air inside the dungeon is clear, with a layer of wispy smoke obscuring the ceiling.",
    "The air inside the dungeon is clear and drafty."
]

var smells = [
    "It smells acrid. You enter the chamber.",
    "It smells of chlorine. You enter the chamber.",
    "It smells dank and moldy. You enter the chamber.",
    "It smells earthy. You enter the chamber.",
    "It smells of old manure. You enter the chamber.",
    "It smells metallic. You enter the chamber.",
    "It smells putrid. You enter the chamber.",
    "It smells of rotting vegetation. You enter the chamber.",
    "It smells salty and wet. You enter the chamber.",
    "It smells stale. You enter the chamber.",
    "It smells sulfurous. You enter the chamber.",
    "It smells of ancient urine. You enter the chamber."
]

var floors = [
    "The floor is littered with broken arrows.",
    "The floor is smeared with ashes.",
    "The floor is littered with bones of all shapes and sizes.",
    "The floor is littered with shards of glass.",
    "The floor is littered with corroded segments of heavy chain.",
    "The floor is covered in cobwebs.",
    "The floor is stained with puddles of dried blood.",
    "The floor is caked with animal dung.",
    "The floor is littered with scraps of rotten food.",
    "The floor is overgrown with glowing fungi.",
    "The floor is littered with clumps of straw.",
    "The floor is littered with rotting planks of wood.",
]

var furnishings = [
    "In the center of the room stands a stone altar to some unknown deity.",
    "In the center of the room rests a large wooden armchair. It looks comfortable.",
    "In the center of the room stands a dark wooden barrel, apparently sealed.",
    "In the center of the room is a filthy mattress.",
    "In the center of the room some boxes seems to have been stacked precariously.",
    "In the center of the room hangs an ornate chandelier.",
    "In the center of the room is an ornately carved writing desk, duly laden with stacks of parchment.",
    "In the center of the room stands a marble fountain, ornately carved.",
    "In the center of the room stands a dusty loom.",
    "In the center of the room rests a mighty, but conspicuously empty throne.",
    "A long wooden table straddles the length of the room.",
    "A small urn sits in the center of the room."
]

var encounters = [
    "Beside this centerpiece you spot a monster!",
    "Your intuition tells you this centerpiece is some sort of trap!",
    "And, in the back of the room, treasure!",
    "And your access to the opposite door is blocked by an obstacle.",
    "And, other than that, nothing at all. Refresh to generate a new dungeon.",
    "And, at the other end of the room the way out of the dungeon! Refresh to generate a new dungeon."
]

var arcticmonsters = [
    "You are beset by a ferocious snow owl. Refresh to generate a new dungeon.",
    "You are beset by a ferocious penguin. Refresh to generate a new dungeon.",
    "You are beset by a ferocious orc. Refresh to generate a new dungeon.",
    "You are beset by a ferocious polar bear. Refresh to generate a new dungeon."
]

var coastalmonsters = [
    "You are beset by a ferocious crab. Refresh to generate a new dungeon.",
    "You are beset by a ferocious merperson. Refresh to generate a new dungeon.",
    "You are beset by a ferocious giant crab. Refresh to generate a new dungeon.",
    "You are beset by a ferocious water elemental. Refresh to generate a new dungeon."
]

var desertmonsters = [
    "You are beset by a ferocious hyena. Refresh to generate a new dungeon.",
    "You are beset by a ferocious jackal. Refresh to generate a new dungeon.",
    "You are beset by a ferocious baby dragon. Refresh to generate a new dungeon.",
    "You are beset by a ferocious swarm of scorpions. Refresh to generate a new dungeon."
]

var forestmonsters = [
    "You are beset by a ferocious goblin. Refresh to generate a new dungeon.",
    "You are beset by a ferocious wolf. Refresh to generate a new dungeon.",
    "You are beset by a ferocious giant spider. Refresh to generate a new dungeon.",
    "You are beset by a ferocious brown bear. Refresh to generate a new dungeon."
]

var grasslandmonsters = [
    "You are beset by a ferocious venomous snake. Refresh to generate a new dungeon.",
    "You are beset by a ferocious panther. Refresh to generate a new dungeon.",
    "You are beset by a ferocious hobgoblin. Refresh to generate a new dungeon.",
    "You are beset by a ferocious tiger. Refresh to generate a new dungeon."
]

var mountainmonsters = [
    "You are beset by a ferocious goat. Refresh to generate a new dungeon.",
    "You are beset by a ferocious mountain lion. Refresh to generate a new dungeon.",
    "You are beset by a ferocious yeti. Refresh to generate a new dungeon.",
    "You are beset by a ferocious earth elemental. Refresh to generate a new dungeon."
]

var swampmonsters = [
    "You are beset by a ferocious crocodile. Refresh to generate a new dungeon.",
    "You are beset by a ferocious swarm of rats. Refresh to generate a new dungeon.",
    "You are beset by a ferocious ghoul. Refresh to generate a new dungeon.",
    "You are beset by a ferocious gelatinous cube. Refresh to generate a new dungeon."
]

var underdarkmonsters = [
    "You are beset by a ferocious giant centipede. Refresh to generate a new dungeon.",
    "You are beset by a ferocious violet fungus. Refresh to generate a new dungeon.",
    "You are beset by a ferocious gray ooze. Refresh to generate a new dungeon.",
    "You are beset by a ferocious goblin boss. Refresh to generate a new dungeon."
]

var underwatermonsters = [
    "You are beset by a ferocious merperhson. Refresh to generate a new dungeon.",
    "You are beset by a ferocious giant sea horse. Refresh to generate a new dungeon.",
    "You are beset by a ferocious giant octopus. Refresh to generate a new dungeon.",
    "You are beset by a ferocious killer whale. Refresh to generate a new dungeon."
]

var urbanmonsters = [
    "You are beset by a ferocious sewer rat. Refresh to generate a new dungeon.",
    "You are beset by a ferocious zombie. Refresh to generate a new dungeon.",
    "You are beset by a ferocious ghost. Refresh to generate a new dungeon.",
    "You are beset by a ferocious vampire. Refresh to generate a new dungeon.",
]

var traps = [
    "The floor starts to rumble and collapse beneath your feet. Refresh to generate a new dungeon.",
    "The ceiling begins to bear down on you with a slow metallic groan. Refresh to generate a new dungeon.",
    "A blaring alarm goes off! Refresh to generate a new dungeon.",
    "The chamber's exits seal shut, and a noxious gas starts seeping in. Refresh to generate a new dungeon.",
    "The chamber's exits seal shut, and water starts pouring in. Refresh to generate a new dungeon.",
    "The sound of a sparking fuse signals that this room is set to blow! Refresh to generate a new dungeon.",
]

var treasures = [
    "You find a mysterious tome, the script unreadable yet oddly familiar. Refresh to generate a new dungeon.",
    "You find 100 gold pieces. Refresh to generate a new dungeon.",
    "You find a longsword inlaid with sparkling sapphires. Refresh to generate a new dungeon.",
    "You find a bottle of fine aged rum. Refresh to generate a new dungeon.",
    "You find a potion of invisibility. Refresh to generate a new dungeon.",
    "You find a deep sense of calm, and an appreciation for all the friends you've made on your journey. Refresh to generate a new dungeon.",
]

var obstacles = [
    "The room's exit is surrounded by a moat of treacherous rushing water. Refresh to generate a new dungeon.",
    "The room has caved in, and you'll have to clear the rubble to get through. Refresh to generate a new dungeon.",
    "A deep chasm in the floor splits the room in two. Refresh to generate a new dungeon.",
    "The room is overgrown with coarse, twisted vines. Refresh to generate a new dungeon.",
]

$("#environments").change(function () {
    environment = $("#environments").val();
    console.log(environment);
    $(".story1").html(intros[environment]);
    $(vibes).show();
})

function rollAirDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("air").innerHTML = result;
    $(".story2").html(airs[result-1]);
}

function rollSmellDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("smell").innerHTML = result;
    $(".story3").html(smells[result-1]);
    $(room1).show();
}

function rollFloorDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("floor").innerHTML = result;
    $(".story4").html(floors[result-1]);
}

function rollFurnitureDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("furniture").innerHTML = result;
    $(".story5").html(furnishings[result-1]);
}

function rollEncounterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("encounter").innerHTML = result;
    $(".story6").html(encounters[result - 1]);
    if (result == 1) {
        console.log(environment);
        if (environment == 0) {
            $(arcticencounter).show();
            $(coastalencounter).hide();
            $(desertencounter).hide();
            $(forestencounter).hide();
            $(grasslandencounter).hide();
            $(mountainencounter).hide();
            $(swampencounter).hide();
            $(underdarkencounter).hide();
            $(underwaterencounter).hide();
            $(urbanencounter).hide();
        }
        else if (environment == 1) {
            $(arcticencounter).hide();
            $(coastalencounter).show();
            $(desertencounter).hide();
            $(forestencounter).hide();
            $(grasslandencounter).hide();
            $(mountainencounter).hide();
            $(swampencounter).hide();
            $(underdarkencounter).hide();
            $(underwaterencounter).hide();
            $(urbanencounter).hide();
        }
        else if (environment == 2) {
            $(arcticencounter).hide();
            $(coastalencounter).hide();
            $(desertencounter).show();
            $(forestencounter).hide();
            $(grasslandencounter).hide();
            $(mountainencounter).hide();
            $(swampencounter).hide();
            $(underdarkencounter).hide();
            $(underwaterencounter).hide();
            $(urbanencounter).hide();
        }
        else if (environment == 3) {
            $(arcticencounter).hide();
            $(coastalencounter).hide();
            $(desertencounter).hide();
            $(forestencounter).show();
            $(grasslandencounter).hide();
            $(mountainencounter).hide();
            $(swampencounter).hide();
            $(underdarkencounter).hide();
            $(underwaterencounter).hide();
            $(urbanencounter).hide();
        }
        else if (environment == 4) {
            $(arcticencounter).hide();
            $(coastalencounter).hide();
            $(desertencounter).hide();
            $(forestencounter).hide();
            $(grasslandencounter).show();
            $(mountainencounter).hide();
            $(swampencounter).hide();
            $(underdarkencounter).hide();
            $(underwaterencounter).hide();
            $(urbanencounter).hide();
        }
        else if (environment == 5) {
            $(arcticencounter).hide();
            $(coastalencounter).hide();
            $(desertencounter).hide();
            $(forestencounter).hide();
            $(grasslandencounter).hide();
            $(mountainencounter).show();
            $(swampencounter).hide();
            $(underdarkencounter).hide();
            $(underwaterencounter).hide();
            $(urbanencounter).hide();
        }
        else if (environment == 6) {
            $(arcticencounter).hide();
            $(coastalencounter).hide();
            $(desertencounter).hide();
            $(forestencounter).hide();
            $(grasslandencounter).hide();
            $(mountainencounter).hide();
            $(swampencounter).show();
            $(underdarkencounter).hide();
            $(underwaterencounter).hide();
            $(urbanencounter).hide();
        }
        else if (environment == 7) {
            $(arcticencounter).hide();
            $(coastalencounter).hide();
            $(desertencounter).hide();
            $(forestencounter).hide();
            $(grasslandencounter).hide();
            $(mountainencounter).hide();
            $(swampencounter).hide();
            $(underdarkencounter).show();
            $(underwaterencounter).hide();
            $(urbanencounter).hide();
        }
        else if (environment == 8) {
            $(arcticencounter).hide();
            $(coastalencounter).hide();
            $(desertencounter).hide();
            $(forestencounter).hide();
            $(grasslandencounter).hide();
            $(mountainencounter).hide();
            $(swampencounter).hide();
            $(underdarkencounter).hide();
            $(underwaterencounter).show();
            $(urbanencounter).hide();
        }
        else if (environment == 9) {
            $(arcticencounter).hide();
            $(coastalencounter).hide();
            $(desertencounter).hide();
            $(forestencounter).hide();
            $(grasslandencounter).hide();
            $(mountainencounter).hide();
            $(swampencounter).hide();
            $(underdarkencounter).hide();
            $(underwaterencounter).hide();
            $(urbanencounter).show();
        }

    }
    else if (result == 2) {
        $(trapencounter).show();
    }
    else if (result == 3) {
        $(treasureencounter).show();

    }
    else if (result == 4) {
        $(obstacleencounter).show();

    }
}

function rollArcticMonsterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("arcticmonster").innerHTML = result;
    $(".story7").html(arcticmonsters[result-1]);
}

function rollCoastalMonsterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("coastalmonster").innerHTML = result;
    $(".story7").html(coastalmonsters[result-1]);
}

function rollDesertMonsterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("desertmonster").innerHTML = result;
    $(".story7").html(desertmonsters[result-1]);
}

function rollForestMonsterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("forestmonster").innerHTML = result;
    $(".story7").html(forestmonsters[result-1]);
}

function rollGrasslandMonsterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("grasslandmonster").innerHTML = result;
    $(".story7").html(grasslandmonsters[result-1]);
}

function rollMountainMonsterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("mountainmonster").innerHTML = result;
    $(".story7").html(mountainmonsters[result-1]);
}

function rollSwampMonsterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("swampmonster").innerHTML = result;
    $(".story7").html(swampmonsters[result-1]);
}

function rollUnderdarkMonsterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("underdarkmonster").innerHTML = result;
    $(".story7").html(underdarkmonsters[result-1]);
}

function rollUnderwaterMonsterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("underwatermonster").innerHTML = result;
    $(".story7").html(underwatermonsters[result-1]);
}

function rollUrbanMonsterDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("urbanmonster").innerHTML = result;
    $(".story7").html(urbanmonsters[result-1]);
}
function rollTrapDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("trap").innerHTML = result;
    $(".story7").html(traps[result - 1]);
}
function rollTreasureDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("treasure").innerHTML = result;
    $(".story7").html(treasures[result - 1]);
}
function rollObstacleDice(max) {
    result = 1 + Math.floor(Math.random() * (max))
    document.getElementById("obstacle").innerHTML = result;
    $(".story7").html(obstacles[result - 1]);
}

//function rollDice(max) {
//    result = 1 + Math.floor(Math.random() * (max))
//    document.getElementById("d"+max).innerHTML = result;
//}

