import ZinShadows from '../media/fineart/Shadows/Z-in-Shadows-by-Luna-Smith.jpg'
import ScottishDream from '../media/fineart/Landscapes/Scottish-Dream-by-Luna-Smith.jpg'
import WomenNature from '../media/fineart/WomenNature/LunaSmith_LifeArchitect.jpg'
import Reflections from '../media/fineart/Landscapes/Autumn-Reflection-by-Luna-Smith.jpg'
import WhiteSnake from '../media/fineart/Animals/Eggs/Hatching-White-Snake-by-Luna-Smith.jpg'
import RainbowEgg from '../media/fineart/Animals/Eggs/Rainbow-Egg-by-Luna-Smith.jpg'
import WinterSummer from '../media/fineart//Landscapes/When-WInter-Meets-Summer-by-Luna-Smith.jpg'
import WinterBreeze from '../media/fineart/Landscapes/Winter-Breeze-by-Luna-Smith.jpg'
import ItalianAlps from '../media/fineart/Landscapes/Italian-Alps-by-Luna-Smith.jpg'
import Autumn from '../media/fineart/Landscapes/Autumn-by-Luna-Smith.jpg'
import Diabaig from '../media/fineart/Landscapes/The-Whishper-of-the-Diabaig--by-Luna-Smith.jpg'
import GoldenTrees from '../media/fineart/Landscapes/Shimmering-Golden-Trees.jpg'
import Hollow from '../media/fineart/Landscapes/The-Blue-Hollow-by-Luna-Smith.jpg'
import Dragon from '../media/fineart/Landscapes/The-Lonely-Dragon-by-Luna-Smith.jpg'
import DreamsFuture from '../media/fineart/Nott/Dreams-of-a-Future-Self-by-Luna-Smith.jpg'
import Universe from '../media/fineart/Nott/The-Reflection-of-my-Universe-by-Luna-Smith.jpg'
import Mother from '../media/fineart/Nott/Kiss-of-Mothers-Love-by-Luna-Smith.jpg'
import Warrior from '../media/fineart/Nott/The-Warrior-of-Shattered-Tears-by-Luna-Smith.jpg'
import Shrimp from '../media/fineart/Animals/Shrimp-by-Luna-Smith.jpg'
import Dream from '../media/fineart/Animals/Dream-by-Luna-Smith.jpg'
import Owl from '../media/fineart/Animals/Owl-by-Luna-Smith.jpg'
import Swan from '../media/fineart/Animals/Swan-by-Luna-Smith.jpg'
import GlenEtive from '../media/fineart/Landscapes/The-Song-of-the-Glen-Etive-by-Luna-Smith.jpg'
import TrappedWind from '../media/fineart/Landscapes/The-Trapped-Wind.jpg'
import SecretGarden from '../media/fineart/Landscapes/Secret-Garden-by-Luna-Smith.jpg'
import BackgroundAnimation from '../media/backgroundAnimation.jpg'
import MainPage from '../../components/FineArt/ArtExhibition/MainPage/MainPage'
import PageOne from '../../components/FineArt/ArtExhibition/Pages/PageOne'
import PageTwo from '../../components/FineArt/ArtExhibition/Pages/PageTwo'
import PageThree from '../../components/FineArt/ArtExhibition/Pages/PageThree'
import PageFour from '../../components/FineArt/ArtExhibition/Pages/PageFour'
import PageFive from '../../components/FineArt/ArtExhibition/Pages/PageFive'
import PageSix from '../../components/FineArt/ArtExhibition/Pages/PageSix'

const artExhibtionPages = [
    {
        page: MainPage,
        artwork: [
            BackgroundAnimation
        ]
    },
    {
        page: PageOne,
        artwork: [
            WinterSummer, ScottishDream,  Reflections, WinterBreeze
        ]
    },
    {
        page: PageTwo,
        artwork: [
            WhiteSnake, RainbowEgg 
        ]
    },
    {
        page: PageThree,
        artwork: [
            Diabaig, GoldenTrees, Hollow, Dragon,
        ]
    },
    {
        page: PageFour,
        artwork: [
            DreamsFuture, Mother, Universe, Warrior
        ]
    },
    {
        page: PageFive,
        artwork: [
          Autumn , GlenEtive, TrappedWind, SecretGarden
        ]
    },
    {
        page: PageSix,
        artwork: [
            Shrimp, Dream, Owl, Swan
        ]
    }
]

export default artExhibtionPages;