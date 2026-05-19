import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../types/navigation.types';
import { Input, Button, MStripe, Toast } from '../components';
import { useAuth } from '../hooks/useAuth';
import { colors, typography, spacing } from '../theme';

type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

export const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const { login } = useAuth();

  const handleRegister = () => {
    if (!name || !email || !password) {
      setToastMessage('Please fill out all fields.');
      return;
    }
    
    // Mock registration login for now
    login(
      { id: '1', email, name: name || 'New User', createdAt: new Date().toISOString() },
      'mock_jwt_token'
    );
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {toastMessage && (
        <Toast 
          message={toastMessage} 
          type="error" 
          onHide={() => setToastMessage(null)} 
        />
      )}
      <View style={styles.content}>
        <MStripe style={styles.stripe} />
        
        <View style={styles.header}>
          <Text style={styles.title}>CREATE ACCOUNT</Text>
          <Text style={styles.subtitle}>Join the M Performance Club</Text>
        </View>

        <View style={styles.form}>
          <Input 
            placeholder="Full Name" 
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <Input 
            placeholder="Email" 
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <Input 
            placeholder="Password" 
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          
          <Button 
            title="REGISTER" 
            onPress={handleRegister} 
            style={styles.button}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerLink}>SIGN IN →</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  content: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: 'center',
  },
  stripe: {
    position: 'absolute',
    top: 80,
    left: spacing.xl,
    right: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  title: {
    ...typography.displayLg,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.bodySm,
    color: colors.muted,
    textAlign: 'center',
  },
  form: {
    marginBottom: spacing.xxl,
  },
  input: {
    marginBottom: spacing.md,
  },
  button: {
    marginTop: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    ...typography.bodySm,
  },
  footerLink: {
    ...typography.labelUpper,
    color: colors.onDark,
  },
});
