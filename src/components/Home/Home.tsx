import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home(){
    const navigate = useNavigate()
    return(
        <div>
            <div className="p-4">
                <h1 className="mb-4 text-2xl font-bold">MyPlay</h1>
                <p className="mb-4">Welcome to my playground</p>
            </div>
            <div className="flex flex-wrap gap-4 p-4"> {/* Removed flex-col to make them horizontal */}
                <button 
                    className="home-button"
                    onClick={() => navigate('/GuessRGB')}
                >
                    GuessRGB
                </button>
                <button 
                    className="home-button" 
                    onClick={() => navigate('/GuessRGB')}
                >
                    GuessRGB
                </button>
                <button 
                    className="home-button" 
                    onClick={() => navigate('/GuessRGB')}
                >
                    GuessRGB
                </button>
            </div>
        </div>
        )
}