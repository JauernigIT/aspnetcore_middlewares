using System.Text.RegularExpressions;

public class OldBrowserDetectionService
{
    public bool IsOldBrowser(string userAgent)
    {
        const int minIeSupportedVersion = 9;
        const string ieVersionPattern = @"(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:)(?<ieVersion>\d+)";
        
        // Check if Internet Explorer is the client browser
        int ieVersion;
        var match = Regex.Match(userAgent, ieVersionPattern);
        if (int.TryParse(match.Groups["ieVersion"].Value, out ieVersion))
        {
            // check IE version
            if (ieVersion < minIeSupportedVersion)
            {
                return true;
            }
        }

        return false;
    }
}