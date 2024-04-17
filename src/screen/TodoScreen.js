import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Linking } from 'react-native';
import { useTodoList } from '../components/todoLogic';

// TodoAppScreen component to display the todo list and interact with tasks
function TodoAppScreen() {
  // Destructure state variables and functions from the custom hook
  const { taskTitle, setTaskTitle, todos, currentListIndex, handleAddTask, handleToggleTask, handleDeleteTask } = useTodoList();

  // Function to render each task item
  const renderTaskItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
        {/* Checkbox to toggle task completion */}
        <TouchableOpacity onPress={() => handleToggleTask(item.id)}>
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#1e90ff',
              marginRight: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* Checkmark icon */}
            {item.completed && (
              <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: '#1e90ff' }} />
            )}
          </View>
        </TouchableOpacity>
        {/* Task title */}
        <Text style={{ flex: 1, fontSize: 16, color: item.completed ? '#888' : '#000' }}>{item.title}</Text>
        {/* Delete button */}
        <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
          <Text style={{ color: 'red', marginLeft: 8 }}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16, marginTop: 40 }}>
      {/* Iterate over todo lists */}
      {todos.map((todo, index) => (
        <View key={todo.id} style={{ marginBottom: 16 }}>
          {/* Todo list title */}
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>{todo.title}</Text>
          {/* FlatList to render tasks */}
          <FlatList
            data={todo.tasks}
            renderItem={renderTaskItem}
            keyExtractor={(task) => task.id}
            showsVerticalScrollIndicator={false}
          />
          {/* Input field to add a new task */}
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#1e90ff',
              borderRadius: 6,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginBottom: 16,
            }}
            placeholder="Add a task"
            value={taskTitle}
            onChangeText={(text) => setTaskTitle(text)}
          />
          {/* Button to add a new task */}
          <TouchableOpacity
            style={{
              backgroundColor: '#000',
              borderRadius: 6,
              paddingVertical: 8,
              alignItems: 'center',
            }}
            onPress={handleAddTask}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Add</Text>
          </TouchableOpacity>
          {/* Button to view web version */}
          <TouchableOpacity onPress={() => Linking.openURL('http://localhost:3000')} style={{ marginTop: 16 }}>
            <Text style={{ color: 'blue' }}>View Web Version</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

export default TodoAppScreen;
