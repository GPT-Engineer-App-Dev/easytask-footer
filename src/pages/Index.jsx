import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Text, IconButton, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Footer = () => (
  <Box as="footer" width="100%" py={4} textAlign="center" borderTop="1px" borderColor="gray.200" mt={4}>
    <Text fontSize="sm" color="gray.600">© 2023 Todo App. All rights reserved.</Text>
  </Box>
);

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={addTodo} colorScheme="blue">Add</Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {todos.map((todo, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)}>
                <Text as={todo.completed ? "s" : ""}>{todo.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete"
                icon={<FaTrash />}
                onClick={() => deleteTodo(index)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
      <Footer />
    </Container>
  );
};

export default Index;