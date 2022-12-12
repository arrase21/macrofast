import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from "@mui/material/InputBase";
import PersonIcon from '@mui/icons-material/Person'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
	const theme = useTheme()
	const colorMode = useContext(ColorModeContext)
  const colors = tokens(theme.palette.mode);

	return (
		<Box display='flex' justifyContent='space-between' p={2}>
       {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
			{/* ICONS */}
			<Box display='flex'>
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'dark' ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>
				
				<IconButton>
					<PersonIcon />
					<label for=''>User</label>
				</IconButton>
			</Box>
		</Box>
	)
}

export default Topbar
