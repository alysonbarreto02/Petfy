import React, { useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { View, Text, Image } from "react-native";

type CoordinatesState = {
  latitude: number;
  longitude: number;
}[];
let trips: CoordinatesState = [];

export default function App() {
  const [coordinates, setCoordinates] = useState<CoordinatesState | null>(null);

  const verifyTrips = async () => {
    let data = [{ latitude: "", longitude: "" }];
    await fetch("/api/trips")
      .then((res) => res.json())
      .then((res) => (data = res))
      .catch((error) => {
        console.error(error);
      });
    data.map((trip) =>
      trips.push({ latitude: +trip.latitude, longitude: +trip.longitude })
    );
    setCoordinates(trips);
  };
  verifyTrips();
  console.log(coordinates?.length);

  return (
    <View>
      {coordinates && (
        <MapView
          className="w-full h-full"
          region={{
            latitude: +coordinates[0].latitude,
            longitude: +coordinates[0].longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0121,
          }}
        >
          {coordinates.map((coordinate) => (
            <Marker coordinate={coordinate} />
          ))}
          <Polyline
            coordinates={coordinates}
            strokeColor="#000"
            strokeColors={["#7F0000"]}
            strokeWidth={6}
          />
        </MapView>
      )}
      <View className="absolute items-center mt-10 w-full h-20">
        <View className="absolute w-11/12 h-16 rounded-lg bg-white items-center justify-center">
          <Text>Você está monitorando o seu pet!</Text>
        </View>
      </View>
    </View>
  );
}
