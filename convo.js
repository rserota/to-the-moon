npc.convos = [
    { pcSays : 'How about that weather, amirite?', condition : isWeather, consequences : null, responses [
        { npcSays : 'Dreadful, truly.', condition : null, consequences : null, responses [
            { pcSays : "I have to go check on a pie.", condition : isPie, consequences : null, responses : null },
            { pcSays : 'Indeed.  Good day!', condition : null, consequences : null, responses : null },
        ] }
    ] },
    { pcSays : "Let's barter!", condition : null, consequences : null, responses : [
        { npcSays : "I'd really rather not. Not with you, at least.", condition : isMad, consequences : null, responses : null },
        { npcSays : "Sure! Have a look at my gear.", condition : null, consequences : barter, responses : null }
    ] } // these callback functions take the convo partner as an argument
]


var converse = function(convo, npc){

    var options = []
    convo.forEach(function(val,ind,arr){
        
    })
    var choice = prompt(choose)
    console.log('------------------------')
    console.log(convos[choice].pcSays)
    console.log('------------------------')

    if ( convo.responses ) {
        for ( var branch = 0; branch < convo.responses.length; branch++ ) {
            if ( convo.responses.)
        }
    }


    console.log(convo.pcSays)

}

