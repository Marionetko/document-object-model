const characters = [
  {
    name: "Eagon Spengler",
    picture: "./img/eagon.png",
    description: "Egon is a former professor of paranormal studies at the Columbia University. Upon his termination, Egon founded Ghostbusters, Inc. along with Doctors Ray Stantz and Peter Venkman. He is considered the brain behind the Ghostbusters and has designed and built nearly all of their equipment, including the Proton Pack and the Storage facility."
  },
  {
    name: "Peter Venkman",
    picture: "./img/peter.png",
    description: "Peter Venkman was a professor working with Egon Spengler and Ray Stantz at the Columbia University. The three of them were researching the supernatural but unlike his partners, Peter wasn't as enthusiastic about the topic. The three of them discovered the librarian ghost, but were unable to catch and show her off to the public. The three of them were soon fired from the university after their funding was cut; though Peter seemed happy to look for new opportunities whatever they may be. After being fired, the three of them decided to build some advanced paranormal equipment and go into a career of freelance ghost catching."
  },
  {
    name: "Ray Stantz",
    picture: "./img/ray.png",
    description: "Before they were kicked out of the University, Ray was devoting a lot of his workday to interviewing people who had some sort of encounter with the paranormal. After the entanglement with the library ghost, Ray was more motivated to continue on with that type of work. After talking with Peter Venkman and Egon Spengler, they all decided to try hunting ghosts full time. Ray even mortgaged the house he was born in to provide the starting capital to get the company started and buy the firehouse. In addition, he rummaged through used car lots to find a suitable vehicle and repair it to make the Ecto-1."
  },
  {
    name: "Winston Zeddemore",
    picture: "./img/winston.png",
    description: "Unlike the other three Ghostbusters, Winston was not originally a university professor. Winston applied for the job after business started to pick up. As part of the interviewing process, Janine asked him if he believed in many things paranormal, to which he said he would believe anything as long as the pay was good. Nonetheless, Winston was hired by Ray instantly."
  }
];

function openCloseNav(characterIndex) {
    let element = document.getElementById("mySidenav");
    element.classList.toggle("open");

    if (typeof characterIndex != 'undefined') {
      updateCharacterInfo(characterIndex);
    }
  }
  
function updateCharacterInfo(characterIndex) {
  const characterImg = document.getElementById('charcterImg');
  const characterDescription = document.getElementById('characterDescription');
  const characterName = document.getElementById("characterName");

  if(characterIndex >= 0 && characterIndex < characters.length) {
    const character = characters[characterIndex];

    characterImg.src = character.picture;
    characterDescription.textContent = character.description;
    characterName.textContent = character.name
  }
}