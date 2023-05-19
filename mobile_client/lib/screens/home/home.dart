import 'package:flutter/material.dart';
import 'package:mobile_client/screens/about/about.dart';
import 'package:mobile_client/screens/home/home_list.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    final widgets = [
      const HomeList(),
      const Center(
        child: Text("1"),
      ),
      const Center(
        child: Text("3"),
      ),
      const AboutScreen(),
      const Center(
        child: Text("5"),
      ),
    ];

    return Scaffold(
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: _selectedIndex,
          onTap: (value) {
            setState(() {
              _selectedIndex = value;
            });
          },
          showSelectedLabels: false,
          unselectedFontSize: 10,
          selectedFontSize: 10,
          showUnselectedLabels: false,
          backgroundColor: Colors.black,
          selectedIconTheme: IconThemeData(
              color: Theme.of(context).colorScheme.primary, size: 24),
          unselectedIconTheme: IconThemeData(
              color: Theme.of(context).colorScheme.secondary, size: 24),
          items: [
            BottomNavigationBarItem(
              label: "Home",
              backgroundColor: Theme.of(context).scaffoldBackgroundColor,
              icon: const Icon(Icons.airplay_sharp),
            ),
            BottomNavigationBarItem(
              label: "Properties",
              backgroundColor: Theme.of(context).scaffoldBackgroundColor,
              icon: const Icon(Icons.home_filled),
            ),
            BottomNavigationBarItem(
              label: "F&B",
              backgroundColor: Theme.of(context).scaffoldBackgroundColor,
              icon: const Icon(Icons.wine_bar),
            ),
            BottomNavigationBarItem(
              label: "Menu",
              backgroundColor: Theme.of(context).scaffoldBackgroundColor,
              icon: const Icon(Icons.menu),
            )
          ],
        ),
        body: widgets[_selectedIndex]);
  }
}
