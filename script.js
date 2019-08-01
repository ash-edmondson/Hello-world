var button = document.getElementById('clickme')

button.addEventListener('click',function(){
  var name= prompt('what is your name')

  alert ('hello ' + name + '!')

  var age= prompt('How old are you')

  var NewAge = parseInt(age) + 10

  alert ('in 10 years you will be ' + NewAge)

  if  (age <18){

    alert('Get of my Lawn!')

  }

  else {
    
    alert ('Acsess Granted. welcome,' + name)

  }


}
)
