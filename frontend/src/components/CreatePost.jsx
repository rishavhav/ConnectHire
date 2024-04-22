import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useColorModeValue } from '@chakra-ui/react'

const CreatePost = () => {
    return (
        <>
            <Button
                position={"fixed"}
                top={"30px"}
                right={"120px"}
                size={"sm"}
                leftIcon={<AddIcon />}
                bg={useColorModeValue("blue.500", "blue.300")}
            >
                Post
            </Button>
        </>
    )
}

export default CreatePost
