import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RemoteEntryModule } from '../../../auth/src/app/remote-entry/entry.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'auth',
          loadChildren: () =>
            import('auth/Module').then((m) => m.RemoteEntryModule)
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    RemoteEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
