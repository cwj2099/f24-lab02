package edu.cmu.cs.cs214.lab02.shapes;

public class Circle implements Shape {
    //Changed encalp
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}
