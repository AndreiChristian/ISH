import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: (value) {
          setState(() {
            _selectedIndex = value;
          });
        },
        showSelectedLabels: false,
        iconSize: 30,
        backgroundColor: Theme.of(context).scaffoldBackgroundColor,
        selectedIconTheme:
            IconThemeData(color: Theme.of(context).colorScheme.primary),
        unselectedIconTheme:
            IconThemeData(color: Theme.of(context).colorScheme.secondary),
        items: const [
          BottomNavigationBarItem(
            label: "Home",
            icon: Icon(Icons.home),
          ),
          BottomNavigationBarItem(
            label: "Properties",
            icon: Icon(Icons.hotel),
          ),
          BottomNavigationBarItem(
            label: "F&B",
            icon: Icon(Icons.fastfood),
          ),
        ],
      ),
    );
  }
}
