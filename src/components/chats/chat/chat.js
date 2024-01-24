import { ListItemButton, ListItemText, ListItemAvatar, Avatar, IconButton, ListItem, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { memo } from 'react'

export const Chat = memo(({ chat, selected, deleteChat }) => {
	return (
		<List component='nav' >
			<ListItem
				selected={selected}
				secondaryAction={
					<IconButton
						edge='end'
						aria-label='delete'
						onClick={(e) => deleteChat(e, chat)}>
						<DeleteIcon />
					</IconButton>}>
						
				<ListItemButton>
					<ListItemAvatar>
						<Avatar />
					</ListItemAvatar>

					<div>
						<ListItemText primary={chat} secondary="Jan 9, 2014" />
					</div>
				</ListItemButton >
			</ListItem>
		</List>
	)
})