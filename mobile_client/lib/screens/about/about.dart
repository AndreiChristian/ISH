import 'package:flutter/material.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: const [
              Text(
                "Properties",
                style: TextStyle(fontSize: 24),
              ),
              Text(
                "F&B",
                style: TextStyle(fontSize: 24),
              ),
              Text(
                "Facilities",
                style: TextStyle(fontSize: 24),
              ),
              Text(
                "Join",
                style: TextStyle(fontSize: 24),
              ),
              Text(
                "Languages",
                style: TextStyle(fontSize: 24),
              ),
            ],
          ),
          const SizedBox(
            height: 100,
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: const [
              Text(
                "SIGN IN",
              ),
              Text(
                "SIGN UP",
              ),
              Text(
                "TERMS AND CONDITIONS",
              ),
            ],
          )
        ],
      ),
    );
  }
}
