import ZinShadows from '../media/fineart/Shadows/Z-in-Shadows-by-Luna-Smith.jpg'
import ScottishDream from '../media/fineart/Landscapes/Scottish-Dream-by-Luna-Smith.jpg'
import WomenNature from '../media/fineart/WomenNature/LunaSmith_LifeArchitect.jpg'
import Reflections from '../media/fineart/Landscapes/Autumn-Reflection-by-Luna-Smith.jpg'
import WhiteSnake from '../media/fineart/Animals/Eggs/Hatching-White-Snake-by-Luna-Smith.jpg'
import RainbowEgg from '../media/fineart/Animals/Eggs/Rainbow-Egg-by-Luna-Smith.jpg'
import FireDragon from '../media/fineart/Animals/Eggs/Fire-Dragon-by-Luna-Smith.jpg'
import WinterSummer from '../media/fineart//Landscapes/When-WInter-Meets-Summer-by-Luna-Smith.jpg'
import WinterBreeze from '../media/fineart/Landscapes/Winter-Breeze-by-Luna-Smith.jpg'
import ItalianAlps from '../media/fineart/Landscapes/Italian-Alps-by-Luna-Smith.jpg'
import Paradise from '../media/fineart/Landscapes/Paradise-by-Luna-Smith.jpg'
import Autumn from '../media/fineart/Landscapes/Autumn-by-Luna-Smith.jpg'
import Diabaig from '../media/fineart/Landscapes/The-Whishper-of-the-Diabaig--by-Luna-Smith.jpg'
import GoldenTrees from '../media/fineart/Landscapes/Shimmering-Golden-Trees.jpg'
import Hollow from '../media/fineart/Landscapes/The-Blue-Hollow-by-Luna-Smith.jpg'
import Dragon from '../media/fineart/Landscapes/The-Lonely-Dragon-by-Luna-Smith.jpg'
import DreamsFuture from '../media/fineart/Nott/Dreams-of-a-Future-Self-by-Luna-Smith.jpg'
import Universe from '../media/fineart/Nott/The-Reflection-of-my-Universe-by-Luna-Smith.jpg'
import Mother from '../media/fineart/Nott/Kiss-of-Mothers-Love-by-Luna-Smith.jpg'
import Wind from '../media/fineart/Nott/The-Soothing-Wind-of-Longing-by-Luna-Smith.jpg'
import Warrior from '../media/fineart/Nott/The-Warrior-of-Shattered-Tears-by-Luna-Smith.jpg'
import Songs from '../media/fineart/Nott/Songs-of-the-Burning-Star-by-Luna-Smith.jpg'
import Shrimp from '../media/fineart/Animals/Shrimp-by-Luna-Smith.jpg'
import Dream from '../media/fineart/Animals/Dream-by-Luna-Smith.jpg'
import Owl from '../media/fineart/Animals/Owl-by-Luna-Smith.jpg'
import Swan from '../media/fineart/Animals/Swan-by-Luna-Smith.jpg'
import GlenEtive from '../media/fineart/Landscapes/The-Song-of-the-Glen-Etive-by-Luna-Smith.jpg'
import Mount from '../media/fineart/Landscapes/Snowy-Mount-Rainier-by-Luna-Smith.jpg'
import Viking from '../media/fineart/Landscapes/Viking-Sunset-by-Luna-Smith.jpg'
import Arran from '../media/fineart/Landscapes/Grasslands-of-Arran-by-Luna-Smith.jpg'
import TrappedWind from '../media/fineart/Landscapes/The-Trapped-Wind.jpg'
import SecretGarden from '../media/fineart/Landscapes/Secret-Garden-by-Luna-Smith.jpg'
import Guardian from '../media/fineart/Landscapes/Guardian-Tree-by-Luna-Smith.jpg'
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
            WinterSummer, Viking, ScottishDream,  Reflections, WinterBreeze, Arran
        ]
    },
    {
        page: PageTwo,
        artwork: [
            WhiteSnake, RainbowEgg, FireDragon
        ]
    },
    {
        page: PageThree,
        artwork: [
            Diabaig, ItalianAlps, GoldenTrees, Hollow, Paradise, Dragon,
        ]
    },
    {
        page: PageFour,
        artwork: [
            Songs, Mother, Universe, Warrior, Wind, DreamsFuture
        ]
    },
    {
        page: PageFive,
        artwork: [
          Autumn , GlenEtive, SecretGarden, TrappedWind, Guardian, Mount
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