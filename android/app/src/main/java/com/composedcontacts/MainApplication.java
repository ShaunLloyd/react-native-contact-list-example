package com.composedcontacts;

import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
  @Override
  public boolean isDebug() {
     return BuildConfig.DEBUG;
  }

  @Override
  public String getJSMainModuleName() {
      return "index";
  }

  protected List<ReactPackage> getPackages() {
     return Arrays.<ReactPackage>asList(
         new VectorIconsPackage(),
         new ReactNativeI18n(),
         new LinearGradientPackage(),
         new ReactNativeContacts()
     );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
     return getPackages();
  }
}
