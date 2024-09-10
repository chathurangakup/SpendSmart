import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const expensesData = [
    {
        id: '1',
        expenses: 50.75,
        time: '09:30 AM',
        date: '2024-08-21',
        purpose: 'Groceries',
    },
    {
        id: '2',
        expenses: 120.00,
        time: '12:00 PM',
        date: '2024-08-20',
        purpose: 'Electricity Bill',
    },
    {
        id: '3',
        expenses: 15.50,
        time: '02:15 PM',
        date: '2024-08-19',
        purpose: 'Coffee',
    },
    {
        id: '4',
        expenses: 200.00,
        time: '06:00 PM',
        date: '2024-08-18',
        purpose: 'Dinner at Restaurant',
    },
];

const ExpenseItem = ({ expenses, time, date, purpose }: any) => (
    <View style={styles.itemContainer}>
        <Text style={styles.expenseText}>${expenses.toFixed(2)}</Text>
        <Text style={styles.purposeText}>{purpose}</Text>
        <Text style={styles.dateText}>{date} at {time}</Text>
    </View>
);

const ExpenceBlock = () => {
    const renderItem = ({ item }: any) => (
        <ExpenseItem
            expenses={item.expenses}
            time={item.time}
            date={item.date}
            purpose={item.purpose}
        />
    );

    return (
        <View >
            <FlatList
                data={expensesData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
    },
    itemContainer: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    expenseText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    purposeText: {
        fontSize: 16,
        color: '#666',
        marginVertical: 4,
    },
    dateText: {
        fontSize: 14,
        color: '#999',
    },
});

export default ExpenceBlock;
