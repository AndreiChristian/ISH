import 'package:flutter/material.dart';
import 'package:mobile_client/screens/home/home.dart';

void main() {
  runApp(
    MaterialApp(
      theme: ThemeData(
          brightness: Brightness.dark,
          colorSchemeSeed: Colors.amber.shade200,
          useMaterial3: true,
          scaffoldBackgroundColor: Colors.black),
      home: const HomeScreen(),
    ),
  );
}
