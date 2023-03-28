import React, { useEffect, useLayoutEffect, useState } from "react";

import MapView, { Marker, Polyline } from "react-native-maps";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

type CoordinatesState = {
  id: string;
  latitude: number;
  longitude: number;
}[];
let trips: CoordinatesState = [];

export default function App() {
  const Navigation = useNavigation();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [coordinates, setCoordinates] = useState<CoordinatesState>([]);

  const verifyTrips = async () => {
    let data: CoordinatesState = [];

    await fetch("/api/trips")
      .then((res) => res.json())
      .then((res) => (data = res))
      .catch((error) => {
        console.error(error);
      });

    data.map((trip) => {
      trips.filter((tripFiltered) => tripFiltered.id === trip.id).length <= 0 &&
        trips.push({
          id: trip.id,
          latitude: +trip.latitude,
          longitude: +trip.longitude,
        });
    });
    setCoordinates(trips);
  };

  useEffect(() => {
    verifyTrips();
  }, [<View />]);

  return (
    <View>
      {coordinates.length > 0 && (
        <MapView
          className="w-full h-full"
          initialRegion={{
            latitude: +coordinates[0].latitude,
            longitude: +coordinates[0].longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0121,
          }}
        >
          {coordinates?.map((coordinate) => (
            <Marker key={coordinate.id} coordinate={coordinate} />
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
