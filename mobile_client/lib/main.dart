import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      theme: ThemeData(
          colorSchemeSeed: Colors.amber.shade400,
          useMaterial3: true,
          scaffoldBackgroundColor: Colors.black),
      home: Scaffold(
        appBar: AppBar(
          title: const Text("LVX"),
          backgroundColor: Colors.amber.shade400,
        ),
      ),
    ),
  );
}
