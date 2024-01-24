import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { profileReducer } from './profile'
import { conversationReducer } from './conversation'
import { messagesReducer } from './messages'
import { botMessage } from './middleware'
import { gistsReducer } from './gists'
import { loginReducer } from './login'
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"




const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['profile']
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
	profile: profileReducer,
	conversation: conversationReducer,
	messages: messagesReducer,
	gists: gistsReducer,
	login: loginReducer
}))

export const store = createStore(
	persistedReducer,
	applyMiddleware(botMessage, thunk)
)

export const persistor = persistStore(store)