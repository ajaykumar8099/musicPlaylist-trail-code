import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {songDetails, onDeleteItem} = props
  const {imageUrl, name, genre, duration, id} = songDetails

  const deleteItem = () => {
    console.log('clicked')
    onDeleteItem(id)
  }
  return (
    <li className="list-container">
      <div className="one-flex-container">
        <img src={imageUrl} alt="track" className="image-song" />
        <div className="details-container">
          <p className="details-head">{name}</p>
          <p className="details-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          onClick={deleteItem}
          className="button-el"
          data-testid="delete"
        >
          <AiOutlineDelete className="dlt-icon" />
        </button>
      </div>
    </li>
  )
}
export default SongItem
