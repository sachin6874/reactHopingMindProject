import Cards  from "./cards";
import pic1 from "../images/logo2.jpg"
import pic2 from "../images/logo3.jpg"
import pic3 from "../images/logo4.jpg"

const Main=()=>(
    <div className="main-section">
        <h1>
        Discover the amazing new app
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
        </p>
       <div>
       <button className="yellow-btn">Play store</button>
        <button className="yellow-btn">App Store</button>
       </div>
       
        <h2>We love new friends!</h2>
     
        <div className="cards-section">
        <Cards url={pic1}
          name="Monkey D Luffy"
          about="he is the son of Monkey d garp and also he recently became the fopurth emperor of the sea. He is also knows as different names like mugiwara no luffy(strawhat luffy)"
        />
        <Cards url={pic2}
         name="Roronoa Zoro"
         about="The is the vice captain of strawhat pirate crew.He also first in command. He uses three sword style and he also want to become the worlds strongest swordsmen"/>
        <Cards url={pic3}
        name="Vinsmoke Sanji"
        about="he is the chef of strawhat pirates. he also a big simp as he never fights ladies even if have to die defending a lady.He also had a very harsh chilhood."/>
        </div>

    </div>
)

export default Main;