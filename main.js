var user_name = prompt("Hello, what is your name?")
var name = confirm(
  "Great " + user_name + "." + " Lets play a little game with me"
)
want()

function want() {
  var weather = confirm("Do you want to know what you can do today")

  if (weather == true) {
    letsstart()
  } else {
    var sure = confirm("Are you sure")
    if (sure == true) {
      alert("Ok, have a nice day ")
    } else {
      letsstart()
    }
  }
}

var choice = sure

var sure = "park"

function letsstart() {
  var sure = prompt(
    "Great! Tell me where do you prefere to go today: park, or museum, "
  )

  if (sure === "park") {
    alert("You have to pass through heavy traffic")
    alert(
      "Its your choice. You can eather 'Wait' or 'Go'? But be aware that you can be stuck in the traffic for a long time."
    )
    let waitgo = prompt("What is your decision")

    if (waitgo === "wait") {
      alert(
        "Sounds good. You can call your wife and let her know that you are going to be late for the dinner so she can be awere of that "
      )
    } else if (waitgo === "go") {
      var yes = prompt(
        "Stay away from the old town there is a big accident cousing a lot of deads. Do you still want to go? 'Yes' or 'No' "
      )
    }

    if (yes === "yes") {
      ok()
    } else {
      alert("Ok no problem see you soon")
    }

    function ok() {
      alert(
        "You went to the park and had  great time overthere but you were late for a dinner with your wife so nothing for you tonight"
      )
      alert("But you got home safe and had time to rest for next day")
    }
  } else {
    alert(
      "The museum is unfortunatelly closed. They have unaspected constructions. You ca still go to the park. "
    )
  }
}
