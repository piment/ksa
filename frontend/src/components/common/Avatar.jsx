import { Stack } from 'react-bootstrap'

function Avatar({user}) {
  return (
    <Stack className='avatar mx-auto mt-2' >
      <img src={user.profil_pict} alt="User Profil Picture" />
      <span>{user.nickname}</span>
      <span>({user?.files?.length} files)</span>
    </Stack>
  )
}

export default Avatar