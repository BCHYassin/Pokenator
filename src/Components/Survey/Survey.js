import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import MultiRangeSlider from "multi-range-slider-react";
import './Survey.css'
import BugImage from '../../Assets/bug.svg'
import DragonImage from '../../Assets/dragon.svg'
import ElectricImage from '../../Assets/electric.svg'
import FightingImage from '../../Assets/fighting.svg'
import FireImage from '../../Assets/fire.svg'
import FlyingImage from '../../Assets/flying.svg'
import GhostImage from '../../Assets/ghost.svg'
import GrassImage from '../../Assets/grass.svg'
import GroundImage from '../../Assets/ground.svg'
import IceImage from '../../Assets/ice.svg'
import NormalImage from '../../Assets/normal.svg'
import PoisonImage from '../../Assets/poison.svg'
import PsychicImage from '../../Assets/psychic.svg'
import RockImage from '../../Assets/rock.svg'
import WaterImage from '../../Assets/water.svg'
import Col from 'react-bootstrap/esm/Col';
import {Row} from "react-bootstrap"
import SingleType from '../SingleType';
import AreaEncounterOption from '../AreaEncounterOption.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Survey = () => {

  const LocationData = [
    "Pallet Town","Viridian City","Pewter City","Cerulean City","Lavender Town","Vermilion City","Celadon City","Fuchsia City","Cinnabar Island",
	"Indigo Plateau",
	"Saffron City",
	"Route 1",
	"Route 2",
	"Route 3",
    "Route 4",
	"Route 5",
	"Route 6",
	"Route 7",
	"Route 8",
	"Route 9",
	"Route 10",
	"Route 11",
	"Route 12",
	"Route 13",
	"Route 14",
    "Route 15",
	"Route 16",
	"Route 17",
	"Route 18",
	"Sea Route 19",
	"Sea Route 20",
	"Sea Route 21",
	"Route 22",
	"Route 23",
	"Route 24",
	"Route 25",
	"Viridian Forest",
	"Mt. Moon",
	"Rock Tunnel",
	"Sea Cottage",
	"S.S. Anne",
	"Pokémon League",
	"Underground Path",
	"Pokémon Tower",
	"Seafoam Islands",
	"Victory Road",
	"Diglett's Cave",
	"Rocket HQ",
	"Silph Co.",
	"PKMN Mansion",
	"Safari Zone",
	"Cerulean Cave",
	"Power Plant",
]

const Moves = [
  "Fly",
  "Blizzard",
  "Agility",
  "Growl",
  "Hydro Pump",
  "Thunder Shock",
  "Vipe Whip",
  "Wing Attack",
  "Withdraw",
  "Whirlwind",
]


  const [gender, setGender] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [move, setMove] = useState("");
  const [nbE, setNbE] = useState(0);
  const [stoneNeeded, setStoneNeeded] = useState(false)
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(0);
  const [minValue3, setMinValue3] = useState(0);
  const [maxValue3, setMaxValue3] = useState(0);


  const locationList = LocationData.map((location) => <AreaEncounterOption localArea={location} />);
  const movesList = Moves.map((move) => <AreaEncounterOption localArea={move} />);

  const navigate = useNavigate();

  const  handleSub = async () => {
    const pokemonData = {
      "gender": gender,
      "types": type,
      "area": area,
      "number_of_evolutions": nbE,
      "stones_needed": stoneNeeded,
      "moves" : move,
      "height" :(minValue+maxValue)/2,
      "weight": (minValue2+maxValue2)/2,
      "speed": (minValue3+maxValue3)/2
    }
    await axios.post('http://127.0.0.1:5000/result', pokemonData)
    navigate('/Result')
  } 

  return (
    <Form className='container'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pokémon Gender: </Form.Label>
        <Form.Select aria-label="Default select example">
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Genderless</option>
          <option value="3">Unknown</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Pokémon Type: </Form.Label>
        <div className='types-grid'>
          <div>
            <SingleType imageLink={BugImage} typeName="Bug" />
            <SingleType imageLink={DragonImage} typeName="Dragon" />
            <SingleType imageLink={ElectricImage} typeName="Electric" />
            <SingleType imageLink={FightingImage} typeName="Fighting" />
            <SingleType imageLink={FireImage} typeName="Fire" />
          </div>
          <div>
            <SingleType imageLink={FlyingImage} typeName="Flying" />
            <SingleType imageLink={GhostImage} typeName="Ghost" />
            <SingleType imageLink={GrassImage} typeName="Grass" />
            <SingleType imageLink={GroundImage} typeName="Ground" />
            <SingleType imageLink={IceImage} typeName="Ice" />
          </div>
          <div>
            <SingleType imageLink={NormalImage} typeName="Normal" />
            <SingleType imageLink={PoisonImage} typeName="Poison" />
            <SingleType imageLink={PsychicImage} typeName="Psychic" />
            <SingleType imageLink={RockImage} typeName="Rock" />
            <SingleType imageLink={WaterImage} typeName="Water" />
          </div>
        </div>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Pokémon Height: </Form.Label>
        <MultiRangeSlider
            // disabled={true}
            onInput={(e) => {
              setMinValue(e.minValue);
              setMaxValue(e.maxValue);
            }}
            onChange={(e) => {
              setMinValue2(e.minValue);
              setMaxValue2(e.maxValue);
            }}
          ></MultiRangeSlider>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Pokémon Weight: </Form.Label>
        <MultiRangeSlider
            // disabled={true}
            onInput={(e) => {
              setMinValue(e.minValue);
              setMaxValue(e.maxValue);
            }}
            onChange={(e) => {
              setMinValue2(e.minValue);
              setMaxValue2(e.maxValue);
            }}
          ></MultiRangeSlider>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Pokémon Speed: </Form.Label>
        <MultiRangeSlider
            // disabled={true}
            onInput={(e) => {
              setMinValue(e.minValue);
              setMaxValue(e.maxValue);
            }}
            onChange={(e) => {
              setMinValue2(e.minValue);
              setMaxValue2(e.maxValue);
            }}
          ></MultiRangeSlider>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pokémon Area Encounter: </Form.Label>
        <Form.Select aria-label="Default select example">
            {locationList}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pokémon Signature Move: </Form.Label>
        <Form.Select aria-label="Default select example">
            {movesList}
        </Form.Select>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Number of Evolutions: </Form.Label>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="0"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="3"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Any Stones needed for the Pokémon's Evolution?: </Form.Label>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group2"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="No"
            name="group2"
            type={type}
            id={`inline-${type}-1`}
          />
        </div>
      ))}
      </Form.Group>
      
      <Button variant="primary" type="button" onClick={() => handleSub()}>
        Submit
      </Button>
    </Form>
  )
}

export default Survey